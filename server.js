// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const webConfig = require('./server/config/web_conf.js');
const bodyParser = require('body-parser');
const io = require('socket.io')
const app = express();

/**
 * Create HTTP server.
 */
const httpServer = http.createServer(app);

/**
 * websocket
 */
if (webConfig.fabricEnable === 'true') {
  // the source
  ws = require('./server/fabric/socket/websocketserver.js')
  ws.init(httpServer)

}
// test socket io
socketIO = io(httpServer)
socketIO.on('connect', (a, b, c) => {
  console.log('connect')
})


// Get our API routes
const api = require('./server/routes/apis');


// cross
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //req.method = req.headers["access-control-request-method"]
    res.send("ok")
  } else {
    next();
  }
});

// Parsers for POST data
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Point static path to docs
app.use(express.static(path.join(__dirname, 'docs')));
app.use(express.static(path.join(__dirname, 'img')));

// Set our api routes
app.use('/apis', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});




/**
 * Listen on provided port, on all network interfaces.
 */
httpServer.listen(webConfig.port, () => console.log(`API running on http://localhost:${webConfig.port}`));



/**
 * for HTTPS
 */
if (webConfig.httpsEnable === 'true') {
  const fs = require('fs');
  const https = require('spdy');
  const privateKey = fs.readFileSync('server.key', 'utf8');
  const certificate = fs.readFileSync('server.crt', 'utf8');
  const credentials = {
    key: privateKey,
    cert: certificate
  };
  const httpsServer = https.createServer(credentials, app)
  httpsServer.listen(webConfig.sslport, () => console.log(`API running on https://localhost:${webConfig.sslport}`));
  if (webConfig.fabricEnable === 'true') {
    require('./server/fabric/socket/websocketserver.js').inits(httpsServer)
  }
  // test sockets io
  socketsIO = io(httpServer)
  socketsIO.on('connect', (a, b, c) => {
    console.log('connect')
  })
}
