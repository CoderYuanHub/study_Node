"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  console.log('header', req.headers);
  res.end('hello world');
});
server.listen(8080, function () {
  console.log('服务启动了');
});