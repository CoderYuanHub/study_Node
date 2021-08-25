"use strict";

var _require = require('child_process'),
    spawn = _require.spawn;

var http = require('http');

var server = new http.Server(function (req, res) {
  // 设置头部信息
  // 方式一：
  // res.setHeader("Content-Type", "text/plain;charset=utf8");
  // 方式二：
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  });
  res.end('<h1>123</h1>');
});
server.listen(8080, function () {
  console.log('服务启动了');
});