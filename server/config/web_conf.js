let env = (process.env.ENV || '') !== '' ? `.${process.env.ENV}` : process.env.ENV || '';
console.log(`../environment/environment${env}.js`)
env = require(`../environment/environment${env}.js`);

let conf = {
  fabricEnable: process.env.FABRICENABLE || 'false',
  httpsEnable: process.env.HTTPSENABLE || process.env.SSLENABLE || 'true',
  port: process.env.PORT || '8081',
  sslport: process.env.SSLPORT || '443',
  mongodb_host: 'localhost',
  mongodb_port: 27017
}
Object.assign(conf, env);
module.exports = conf;

