// express
const express = require('express');
const router = express.Router();

// about web3 require
const contract_conf = require('./../ethereum/contract_conf.js');
const ethereum_conf = require('./../config/ethereum_conf.js');
const zhuanti = require('./../ethereum/zhuanti.js');
const mongodb = require('./../ethereum/mongodb.js');
const fs = require('fs');
const path = require('path');
const net = require('net');

let fails = {
  success: false
};

/* api list */
router.use(async(req, res, next) => {
  /**
   * 還會用到 勿刪
   */
  // if (req.method !== 'POST') {
  //   res.send(JSON.stringify({
  //     error: `haven't ${req.method} api`
  //   }));
  //   return
  // }

  zhuanti.setProvider();
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/info', async(req, res) => {
  body = {
    coinbase: await zhuanti.getCoinbase(),
    zhuantiContractAddress: await zhuanti.getZhuantiContractAddress(),
    account: await mongodb.getAllAccount(),
    contracts: await mongodb.getContracts(),
  }
  res.send(JSON.stringify(body));
  return;
});

router.post('/getCoinbase', async(req, res) => {
  res.send(JSON.stringify({
    success: true,
    coinbase: await zhuanti.getCoinbase()
  }));
  return;
});

router.post('/newAccount', async(req, res) => {
  // To Do 檢查帳號密碼字串合法性
  let name = req.body['name'];
  let accountID = req.body['accountID'];
  let password = req.body['password'] || contract_conf.defaultPassword;
  mongodb.isExist(accountID)
  let conditions = [password.length < 8, !accountID, await mongodb.isExist(accountID), !name];
  const errors = ['password.length < 8', 'not found accountID', 'accountID is exist', 'no input name'];
  for (const index in conditions) {
    if (conditions[index]) {
      res.send(JSON.stringify({
        success: false,
        error: errors[index]
      }));
      return;
    }
  }

  try {
    let address = await zhuanti.newAccount(password)
    let coinbase = await zhuanti.getCoinbase();
    account = {};
    account.name = name;
    account.accountID = accountID;
    account.address = address;
    account.password = password;
    account.contractsAddress = [];
    mongodb.newAccount(account);
    /**
     * copy {{個人帳號資訊}}
     * 去除密碼,添加回傳值{{success}}
     * coinbase 轉帳給他 100 eth
     */
    let body = {};
    Object.assign(body, account);
    delete body.password;
    body.success = true;
    zhuanti.transaction(coinbase, contract_conf.baseEther, address, contract_conf.defaultPassword);
    res.send(JSON.stringify(body));
  } catch (e) {
    res.send(JSON.stringify({
      success: false,
      error: "can\'t newAccount ,please call developer."
    }));
  }
  return;
});


router.post('/getBalance', async(req, res) => {
  let body = {};
  let account = req.body['account'];
  if (!account) { // account === undefined || account === ''
    body.success = false;
    body.message = 'no input account';
    body = JSON.stringify(body);
    res.send(body);
    return;
  }
  try {
    let result = await zhuanti.getBalance(account);
    body.success = true;
    body.message = result;
    res.send(JSON.stringify(body));
  } catch (e) {
    res.send(JSON.stringify({
      success: false,
      error: "can't getBalance ,please call developer."
    }));
  }
  return;
});

router.post('/login', async(req, res) => {
  let accountID = req.body['accountID'];
  let password = req.body['password'] || contract_conf.defaultPassword;
  if (!accountID) { //accountID === undefined || accountID === ''
    let body = {};
    body.success = false;
    body.error = 'no input accountID';
    body = JSON.stringify(body);
    res.send(body);
    return;
  }
  let account = await mongodb.agreeAccount(accountID, password);
  if (account) {
    /**
     * copy {{個人帳號資訊}}
     * 去除密碼,添加回傳值 {{success}}
     */
    let body = {};
    Object.assign(body, account);
    body.success = true;
    body = JSON.stringify(body);
    res.send(body);
  } else {
    res.send(JSON.stringify({
      success: false,
      error: '帳戶或密碼不正確'
    }));
  }
});

router.post('/getContracts', async(req, res) => {
  res.send(await mongodb.getContracts());
});

router.post('/createContract', async(req, res) => {
  let data = {};
  data.accountID = req.body["accountID"];
  data.password = req.body["password"] || contract_conf.defaultPassword;
  data.margin = req.body["margin"];
  data.targetWeight = req.body["targetWeight"];
  data.lastWeight = req.body["lastWeight"];
  data.expiryDate = req.body["expiryDate"];
  data.description = req.body["description"];

  for (key in data) {
    if (!data[key]) { // don't simplify
      res.send(JSON.stringify({
        success: false,
        error: `no input ${key}`
      }));
      return;
    }
  }
  let account = await mongodb.agreeAccount(data.accountID, data.password);
  if (!account) {
    res.send(JSON.stringify({
      success: false,
      error: "帳戶或密碼不正確"
    }));
    return;
  }


  // TODO vvvvvv fix it
  data.margin += contract_conf.zero18;


  let jianfeAddress = await zhuanti.createContract(account.address, data);
  if (jianfeAddress) {
    data.contractAddress = jianfeAddress;
    delete data.password;
    await mongodb.createContract(data.accountID, data);
    let contractsAddress = await mongodb.getAccountContractList(data.accountID);
    res.send(JSON.stringify({
      success: true,
      contractsAddress: contractsAddress
    }));
    return;
  }
  res.send(JSON.stringify({
    success: false,
    error: "不明錯誤"
  }));

});

router.post('/joinContract', async(req, res) => {
  let contractAddress = req.body['address'];
  let howEther = req.body['howEther'];
  let position = req.body['position'];
  let accountID = req.body['accountID'];
  let password = req.body['password'] || contract_conf.defaultPassword;

  if (!(contractAddress && howEther && position && accountID && password)) {
    res.send({
      success: false,
      code: "訊息不完整"
    });
    return;
  } else if (!(position === "support" || position === "oppose")) {
    res.send(JSON.stringify({
      success: false,
      error: "為選填支持或反對"
    }));
    return;
  }

  /**
   * 從mongodb 以帳號密碼 獲取 帳戶 address
   * 在使用 web3 調用合約
   * 再將加入的{{合約地址}}寫入{{帳戶的合約地址}}
   * 最後送出{{帳戶的合約地址}}
   */
  let account = await mongodb.agreeAccount(accountID, password);
  if (!account) {
    res.send(JSON.stringify({
      success: false,
      error: "帳戶或密碼不正確"
    }));
    return;
  }
  const finish = zhuanti.joinContract(account.address, password, contractAddress, position, howEther);
  if (!finish) {
    res.send(JSON.stringify({
      success: false,
      error: "不明錯誤"
    }));
    return;
  }
  await mongodb.joinContract(accountID, contractAddress);
  res.send({
    contractsAddress: await mongodb.getAccountContractList(accountID),
    success: true
  });
});

router.post('/getContractTotal', async(req, res) => {
  let address = req.body['address'];
  let total = await zhuanti.getContractTotal(address);
  res.send({
    success: true,
    total: total
  });
});

router.all(/\/([\w\W]+)/, async(req, res) => {
  res.send(JSON.stringify({
    success: false,
    error: `haven't ${req.method} ${req.paramss[0]} api`
  }));
  return;
});

module.exports = router;
