"use strict";

var express = require('express');

var app = express();
app.get('/product/:id', function (req, res, next) {
  console.log(req.params);
  res.end('product请求');
});
app.get('/login', function (req, res, next) {
  console.log(req.query);
  res.end('login请求');
});
app.listen(8080, function () {
  console.log('request参数服务启动了～');
});