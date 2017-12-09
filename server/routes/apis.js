const express = require('express');
const router = express.Router();
const webConfig = require('./../config/web_conf.js');

/* api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
for (const blockchain of [ 'ethereum']) {
  if (Reflect.get(webConfig, `${blockchain}Enable`) === 'true') {
    const routerFab = require(`./${blockchain}.js`);
    router.use(`/${blockchain}`, routerFab);
  }
}




module.exports = router;
