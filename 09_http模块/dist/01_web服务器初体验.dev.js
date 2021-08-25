"use strict";

var http = require('http'); // 创建一个web服务器


var server = http.createServer(function (req, res) {
  res.end('hello Server');
}); // 制定服务器的端口号和主机

server.listen(9090, '0.0.0.0', function () {
  console.log('服务启动成功～');
});