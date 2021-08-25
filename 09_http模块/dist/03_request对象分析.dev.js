"use strict";

var http = require('http');

var server = new http.Server(function (req, res) {
  // console.log('req', res);
  // 请求 端口后的URL
  console.log(req.url); // 请求方式 GET，POST等

  console.log(req.method); // 请求头信息

  console.log(req.headers);
  res.end('hello world.');
});
server.listen(8888, function () {
  console.log('服务启动了');
});