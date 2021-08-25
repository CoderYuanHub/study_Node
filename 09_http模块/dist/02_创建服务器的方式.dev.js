"use strict";

var http = require('http'); // 创建服务器
// 方法一


var sever = new http.Server(function (req, res) {
  res.end('新的服务启动了');
});
sever.listen(8000, function () {
  console.log('服务一启动了');
}); // 方法二

var serve2 = http.createServer(function (req, res) {
  res.end('服务二启动');
}); // 端口号port可不填，会默认分配端口，

serve2.listen(8001, function () {
  console.log('服务二启动了');
  console.log(serve2);
});