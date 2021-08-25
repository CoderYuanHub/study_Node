"use strict";

var express = require('express');

var app = express(); // 中间件优先匹配第一个

app.use(function (req, res, next) {
  console.log('hello world');
  next();
}); // 路径匹配中间件

app.use('/home', function (req, res, next) {
  console.log('hello home');
  next();
});
app.use('/home', function (req, res, next) {
  console.log('hello home 02');
  res.end('hello home 02');
});
app.listen(8080, function () {
  console.log('路径中间件服务启动了～');
});