const express = require('express');
const router = express.Router();
const webConfig = require('./../config/web_conf.js');

/* api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
// if (webConfig.bitcoinEnable) {
//   const routerBit = require('./bitcoin.js');
//   router.use('/bitcoin', routerBit);
// }
// if (webConfig.ethereumEnable) {
//   const routerEth = require('./ethereum.js');
//   router.use('/ethereum', routerEth);
// }
// if (webConfig.fabricEnable) {
//   const routerFab = require('./fabric.js');
//   router.use('/fabric', routerFab);
// }
for (const blockchain of ['bitcoin', 'ethereum', 'fabric']) {
  if (Reflect.get(webConfig, `${blockchain}Enable`) === 'true') {
    const routerFab = require(`./${blockchain}.js`);
    router.use(`/${blockchain}`, routerFab);
  }
}




module.exports = router;
