"use strict";

var http = require('http');

var server = new http.Server(function (req, res) {
  res.write('响应结果');
  res.end('hello world');
});
server.listen(8080, function () {
  console.log('服务启动了');
});