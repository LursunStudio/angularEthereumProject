const mongodb = require('mongodb');
const web_conf = require('../config/web_conf.js');
let mongodbServer = new mongodb.Server(web_conf.mongodb_host, web_conf.mongodb_port, {
  auto_reconnect: true,
  poolSize: 10
});


let ethereum;
/**
 * @description 連線 mongo ethereum db
 */
(async() => {
  try {
    ethereum = await new mongodb.Db('ethereum', mongodbServer).open();
  } catch (e) {
    console.log('can\'t connect mongodb')
  }
  ethereum.addListener('close', console.log)
  ethereum.addListener('error', console.log)
})();


/**
 * @description 從 mongo ethereum db 得到 collection
 * @param {string} 表格名稱
 */
let getCollection = (collectionName) => {
  return new Promise((resolve, reject) => {
    ethereum.collection(collectionName, function (err, collection) {
      if (err) {
        console.log(err)
        resolve(false);
        return
      }
      resolve(collection);
    })
  })
}

/**
 * @description 得到專題合約地址
 */
exports.getZhuantiContractAddress = module.exports.getZhuantiContractAddress = async() => {
  let contractsAddressCollection = await getCollection('contractsAddress');
  return new Promise((resolve, reject) => {
    contractsAddressCollection.find({}).toArray(function (err, result) {
      if (err) reject(err);
      if (result.length > 0 && result[0].zhuanti) {
        resolve(result[0].zhuanti);
        return
      };
      resolve(false)
    })
  })

}

/**
 * @description 儲存專題地址
 */
exports.saveZhuantiContractAddress = module.exports.saveZhuantiContractAddress = async(zhuantiAddress) => {
  let contractsAddressCollection = await getCollection('contractsAddress');
  contractsAddressCollection.update({}, {
    $set: {
      list: [],
      zhuanti: zhuantiAddress
    }
  }, {
    upsert: true
  })
}

/**
 * @description 建立新帳戶
 */
exports.newAccount = module.exports.newAccount = async(info) => {
  let accountsCollection = await getCollection('accounts');
  accountsCollection.insert(info, function (err, data) {
    console.log(err, data);
  });
}

/**
 * @description 得到帳戶擁有合約地址清單
 * @param {string} 帳戶 ID
 */
exports.getAccountContractList = module.exports.getAccountContractList = async(accountID) => {
  let accountsCollection = await getCollection('accounts');

  return new Promise((resolve, reject) => {
    accountsCollection.find({
        accountID: accountID
      }, {
        contractsAddress: true
      })
      .toArray(function (err, result) {
        if (err) reject(err);
        if (result.length === 0) {
          resolve(false);
        }
        resolve(result[0].contractsAddress)
      })
  })
}


/**
 * @description 得到帳戶授權資料
 * @param {string} 帳戶 ID
 * @param {string} 帳戶 密碼
 */
exports.agreeAccount = module.exports.agreeAccount = async(accountID, password) => {
  let accountsCollection = await getCollection('accounts');
  return new Promise((resolve, reject) => {
    accountsCollection.find({
      accountID: accountID,
      password: password
    }, {
      _id: false,
      passowrd: false
    }).toArray(function (err, result) {
      if (err) reject(err);
      if (result.length === 0) {
        resolve(false);
      }
      resolve(result[0]);
    })
  })
}

/**
 * @description 建立合約
 * @param {string} 帳戶 ID
 * @param {string} 合約資料
 * contract={
 *  contract.address
 *  ...
 * }
 */
exports.createContract = module.exports.createContract = async(accountID, contract) => {

  // 帳戶的{{合約地址}}清單增加一筆
  let accountsCollection = await getCollection('accounts');
  let contractsAddress = await new Promise((resolve, reject) => {
    accountsCollection.find({
      accountID: accountID,
      contractsAddress: {
        $exists: true
      }
    }, {
      contractsAddress: true
    }).toArray(function (err, result) {
      if (err) reject(err);
      resolve(result[0].contractsAddress);
    })
  })
  contractsAddress.splice(0, 0, contract.contractAddress);
  accountsCollection.update({
    accountID: accountID
  }, {
    $set: {
      contractsAddress: contractsAddress
    }
  })

  // {{合約資料}}增加一筆
  let contractsCollection = await getCollection('contracts');
  contractsCollection.insert(contract, function (err, data) {
    console.log(err, data)
  })

  // {{合約地址}}清單增加一筆
  let contractsAddressCollection = await getCollection('contractsAddress');
  contractsAddress = await new Promise((resolve, reject) => {
    contractsAddressCollection.find({}).toArray(function (err, result) {
      if (err) reject(err);
      resolve(result[0].list);
    })
  })
  contractsAddress.splice(0, 0, contract.contractAddress);
  contractsAddressCollection.update({}, {
    $set: {
      list: contractsAddress
    }
  }, {
    upsert: true
  });
}

/**
 * @description 參與減肥合約
 * @param {string} 帳戶 ID
 * @param {string} 合約地址
 */
exports.joinContract = module.exports.joinContract = async(accountID, address) => {
  let accountsCollection = await getCollection('accounts');
  let contractsAddress = await new Promise((resolve, reject) => {
    accountsCollection.find({
      accountID: accountID
    }).toArray(function (err, result) {
      resolve(result[0].contractsAddress)
    })
  })

  if (contractsAddress.indexOf(address) < 0) {
    contractsAddress.splice(0, 0, address)
    accountsCollection.update({
      accountID: accountID
    }, {
      $set: {
        contractsAddress: contractsAddress
      }
    })
  }
}

/**
 * @description 得到所有{{合約地址}}和{{合約資料}}
 */
exports.getContracts = module.exports.getContracts = async() => {
  // 獲得{{合約資料}}
  let contractsCollection = await getCollection('contracts');
  let contractsList = await new Promise((resolve, reject) => {
    contractsCollection.find({}, {
      _id: false,
    }).toArray(function (err, results) {
      resolve(results)
    })
  })
  // 格式化{{合約資料}}
  let cl = {};
  contractsList.forEach(item => {
    cl[item.contractAddress] = item;
  });


  // 獲得{{合約地址}}
  let contractsAddressCollection = await getCollection('contractsAddress');
  let contractsAddress = await new Promise((resolve, reject) => {
    contractsAddressCollection.find({}, {
      _id: false,
    }).toArray(function (err, result) {
      if (result.length == 0) resolve(false);
      resolve(result[0].list)
    })
  })

  return {
    contractsList: cl,
    contractsAddress: contractsAddress
  }

}

/**
 * @description 帳戶是否存在
 * @param {string} 帳戶 ID
 */
exports.isExist = module.exports.isExist = async(accountID) => {
  let accountsCollection = await getCollection('accounts');
  return new Promise((resolve, reject) => {
    accountsCollection.find({
      accountID: accountID
    }).toArray(function (err, result) {
      if (result.length === 0) resolve(false);
      else if (result.length === 1) resolve(true);
      else console.log('isExist error')
    })
  })
}


exports.getAllAccount = module.exports.getAllAccount = async() => {
  let accountsCollection = await getCollection('accounts');
  return new Promise((resolve, reject) => {
    accountsCollection.find({}).toArray(function (err, result) {
      resolve(result);
    })
  })
}


exports.getAccountAddress = module.exports.getAccountAddress = async(accountID) => {
  let accountsCollection = await getCollection('accounts');
  return new Promise((resolve, reject) => {
    accountsCollection.find({
      accountID: accountID
    }, {
      address: true,
      _id: false
    }).toArray(function (err, result) {
      resolve(result);
    })
  })
}
