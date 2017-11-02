const contract_conf = require('./contract_conf.js');
const ethereum_conf = require('./../config/ethereum_conf.js');
const mongodb = require('./../ethereum/mongodb.js');
const fs = require('fs');
const path = require('path');
let Web3 = require('web3');
var net = require('net');


//init
Web3.prototype.getAccount = function (address, password = contract_conf.defaultPassword) {
  return this.eth.personal.unlockAccount(address, password, 10);
}

let web3Client = new Web3();
let globalProvider = null;
let coinbase = '';
let zhuantiContractAddress = '';
let fails = {
  success: false
};


let getCoinbase = () => {
  return new Promise((resolve, reject) => {
    if (coinbase !== '') {
      resolve(coinbase);
      return;
    }
    web3Client.eth.getCoinbase((error, result) => {
      if (error) {
        if (error.message === 'Returned error: etherbase address must be explicitly specified') {
          resolve(web3Client.eth.personal.newAccount(contract_conf.defaultPassword).then(result => {
            coinbase = result;
          }));
        } else {
          console.log(error);
          resolve(false);
        }
      }
      coinbase = result;
      resolve(result);
    }).catch(error => {
      return error;
    });
  });
};

let getZhuantiContractAddress = async() => {
  if (zhuantiContractAddress !== '') {
    return zhuantiContractAddress;
  }
  let preZhuantiContractAddress = await mongodb.getZhuantiContractAddress();
  if (preZhuantiContractAddress) {
    return preZhuantiContractAddress;
  }
  let coinbase = await getCoinbase();
  let unlock = await web3Client.getAccount(coinbase, contract_conf.defaultPassword);
  if (unlock) {
    let contract = new web3Client.eth.Contract(contract_conf.zhuantiABI);
    zhuantiContractAddress = await contract.deploy({
      data: contract_conf.zhuantiData,
      arguments: []
    }).send({
      from: coinbase,
      gas: 1000000,
      gasPrice: 1000000,
    }).then(result => {
      return result.options.address;
    });
    mongodb.saveZhuantiContractAddress(zhuantiContractAddress);
    return zhuantiContractAddress;
  } else {
    return false;
  }
};


module.exports.setProvider = (provider = null) => {
  if (provider === null) {
    if (globalProvider !== null) {
      provider = globalProvider;
    } else if (ethereum_conf.protocol === 'ipc') {
      provider = ethereum_conf.nodeIPC;
    } else if (ethereum_conf.protocol.match(/^http/)) {
      provider = ethereum_conf.protocol + ethereum_conf.nodeURL; // 8080 for cpp/AZ, 8545 for go/mist
    } else {
      throw ('not found provider');
    }
  }
  globalProvider = provider;
  if (ethereum_conf.protocol === 'ipc') {
    web3Client.setProvider(new Web3.providers.IpcProvider(provider, net));
  } else if (ethereum_conf.protocol.match(/^http/)) {
    web3Client.setProvider(new Web3.providers.HttpProvider(provider, net));
  }
};

module.exports.transaction = async(account, howMuch, toAccount, password = contract_conf.defaultPassword) => {
  let unlock = await web3Client.getAccount(account, password);
  if (unlock) {
    tx = {
      from: account,
      to: toAccount,
      value: howMuch.toString()
    }
    web3Client.eth.personal.sendTransaction(tx, password);
  }
};

module.exports.getCoinbase = getCoinbase;

module.exports.getZhuantiContractAddress = async() => {
  if (zhuantiContractAddress !== '') {
    return zhuantiContractAddress;
  }
  let preZhuantiContractAddress = await getZhuantiContractAddress();
  if (preZhuantiContractAddress) {
    return preZhuantiContractAddress;
  }
  let coinbase = await getCoinbase();
  let unlock = await web3Client.getAccount(coinbase, contract_conf.defaultPassword);
  if (unlock) {
    let contract = new web3Client.eth.Contract(contract_conf.zhuantiABI);
    zhuantiContractAddress = await contract.deploy({
      data: contract_conf.zhuantiData,
      arguments: []
    }).send({
      from: coinbase,
      gas: 1000000,
      gasPrice: 1000000,
    }).then(result => {
      return result.options.address;
    });
    mongodb.saveZhuantiContractAddress(zhuantiContractAddress)
    return zhuantiContractAddress
  } else {
    return false;
  }
};

module.exports.getContractTotal = (address) => {
  let jianfeContract = new web3Client.eth.Contract(contract_conf.jianfeABI, address);
  return new Promise((resolve, reject) => {
    jianfeContract.methods.amount().call((err, result) => {
      if (err) {
        reject(err);
        return
      }
      resolve(result)
    });
  });
}

module.exports.joinContract = async(userAddress, password, contractAddress, position, howEther) => {
  let unlock = await web3Client.getAccount(userAddress, password);
  if (unlock) {
    let jianfeContract = new web3Client.eth.Contract(contract_conf.jianfeABI, contractAddress);
    await jianfeContract.methods[position]().send({
      from: userAddress,
      value: howEther,
      gasPrice: 90000,
      gas: 1000000
    })
  }
  return unlock;
}

module.exports.createContract = async(userAddress, contractData) => {
  /** 返回值 result.{{事件名稱}}.returnValues: Map 內含{{減肥合約地址}}
   * 將取得的{{減肥合約地址}}存進{{合約資料}}
   * 將取得的{{減肥合約地址}}附加進{{contractsAddress}}
   * 將取得的{{減肥合約地址}}附加進{{個人帳戶.contractsAddress}}
   * 將{{合約資料}}多餘的{{密碼}}資料刪除
   * 將{{合約資料}}存進{{contractsList}},以{{減肥合約地址}}為key
   * 將{{個人帳戶.contractsAddress}} 回傳至客戶端
   */
  let unlock = await web3Client.getAccount(userAddress, contractData.password);
  if (unlock) {
    let zhuantiContractAddress = await getZhuantiContractAddress();
    let zhuantiContract = new web3Client.eth.Contract(contract_conf.zhuantiABI, zhuantiContractAddress);
    try {
      let result = await zhuantiContract.methods.createContract(contractData.targetWeight, contractData.lastWeight, contractData.expiryDate)
        .send({
          from: userAddress,
          value: contractData.margin,
          gasPrice: 90000,
          gas: 1000000
        })
      let returnValues = result.events.createContractEvent.returnValues['_jianfeAddress'];
      return returnValues;
    } catch (e) {
      return false;
    }
  }
  return false;
}

module.exports.getBalance = async(address) => {
  return await web3Client.eth.getBalance(address);
}

module.exports.newAccount = (password) => {
  return web3Client.eth.personal.newAccount(password);
}
