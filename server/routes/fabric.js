const express = require('express');
const router = express.Router();

// require('../fabric/socket/websocketserver.js')(http)

let timer = require('../fabric/timer/timer.js');
timer.start()
let ledgerMgr = require('../fabric/utils/ledgerMgr.js')
let statusMertics = require('../fabric/service/metricservice.js')
let channelsRouter = require('../fabric/router/channels.js')
let query = require('../fabric/app/query.js')
let sql = require('../fabric/db/mysqlservice.js')
let config = require('../fabric/config.json');

let app2 =require('../fabric/app2/helper.js')


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('fabric api works');
});
router.use('/rest', channelsRouter)

router.get('/getConfig',(req, res)=>{
  res.send(app2.getConfig());
})

router.post("/tx/getinfo", function (req, res) {

  let txid = req.body.txid
  if (txid != '0') {
    query.getTransactionByID('peer1', ledgerMgr.getCurrChannel(), txid, 'admin', 'org1').then(response_payloads => {

      let header = response_payloads['transactionEnvelope']['payload']['header']
      let data = response_payloads['transactionEnvelope']['payload']['data']
      let signature = response_payloads['transactionEnvelope']['signature'].toString("hex")

      res.send({
        'tx_id': header.channel_header.tx_id,
        'timestamp': header.channel_header.timestamp,
        'channel_id': header.channel_header.channel_id,
        'type': header.channel_header.type,
      })
    })

  } else {
    res.send({})
  }


});

router.post("/tx/json", function (req, res) {

  let txid = req.body.number
  if (txid != '0') {
    query.getTransactionByID('peer1', ledgerMgr.getCurrChannel(), txid, 'admin', 'org1').then(response_payloads => {

      let header = response_payloads['transactionEnvelope']['payload']['header']
      let data = response_payloads['transactionEnvelope']['payload']['data']
      let signature = response_payloads['transactionEnvelope']['signature'].toString("hex")

      let blockjsonstr = JSON.stringify(response_payloads['transactionEnvelope'])

      res.send(blockjsonstr)

    })

  } else {

    res.send({})

  }

});

router.post("/block/json", function (req, res) {

  let number = req.body.number
  query.getBlockByNumber('peer1', ledgerMgr.getCurrChannel(), parseInt(number), 'admin', 'org1').then(block => {

    let blockjsonstr = JSON.stringify(block)

    res.send(blockjsonstr)
  })
});


router.post("/block/getinfo", function (req, res) {

  let number = req.body.number
  query.getBlockByNumber('peer1', ledgerMgr.getCurrChannel(), parseInt(number), 'admin', 'org1').then(block => {
    res.send({
      'number': block.header.number.toString(),
      'previous_hash': block.header.previous_hash,
      'data_hash': block.header.data_hash,
      'transactions': block.data.data
    })
  })
});

/*router.post("/block/get", function(req, res) {
    let number=req.body.number
    query.getBlockByNumber('peer1',ledgerMgr.getCurrChannel(),parseInt(number),'admin','org1').then(block=>{
        res.send({
            'number':number,
            'txCount':block.data.data.length
        })
    })
});*/
router.post("/block/get", function (req, res) {
  let number = req.body.number
  sql.getRowByPkOne(`select blocknum ,txcount from blocks where channelname='${ledgerMgr.getCurrChannel()}' and blocknum='${number}'`).then(row => {
    if (row) {
      res.send({
        'number': row.blocknum,
        'txCount': row.txcount
      })
    }
  })

});

//return latest status
router.get("/status/get", function (req, res) {
  statusMertics.getStatus(ledgerMgr.getCurrChannel(), function (status) {
    res.send(status)
  })
});

router.get('/chaincodelist', function (req, res) {
  statusMertics.getTxPerChaincode(ledgerMgr.getCurrChannel(), function (data) {
    res.send(data)
  })
})

router.get('/changeChannel', function (req, res) {
  let channelName = req.body.channelName
  ledgerMgr.changeChannel(channelName)
  res.end()
})

router.get('/curChannel', function (req, res) {
  res.send({
    'currentChannel': ledgerMgr.getCurrChannel()
  })
})

router.get('/channellist', function (req, res) {
  res.send({
    'channelList': ledgerMgr.getChannellist()
  })
})

router.get("/peerlist", function(req, res) {
  statusMertics.getPeerList(ledgerMgr.getCurrChannel(),function(data){
      res.send(data)
  })
});

module.exports = router;
