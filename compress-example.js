#!/usr/bin/env node

var    http = require('http'),
  httpProxy = require('http-proxy'),
    connect = require('connect');

httpProxy.createServer(
  connect.compress(),
  9000, '127.0.0.1'
).listen(8080);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
