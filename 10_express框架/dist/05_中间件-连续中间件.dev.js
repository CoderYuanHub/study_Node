"use strict";

var express = require('express');

var app = express();
app.use(function (req, res, next) {
  console.log('hello use');
  next();
});
app.get('/home', function (req, res, next) {
  console.log('hello home');
  next();
});
app.get('/home', function (req, res, next) {
  console.log('hello home 01');
  next();
}, function (req, res, next) {
  console.log('hello home 02');
  next();
}, function (req, res, next) {
  console.log('hello home 03');
  res.end('连续中间件访问结束了～');
});
app.listen(8080, function () {
  console.log('连续中间件服务启动了');
});