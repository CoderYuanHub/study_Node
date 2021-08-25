"use strict";

var express = require('express');

var app = express();
app.use(function (req, res, next) {
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', function (data) {
      req.body = JSON.parse(data.toString());
    });
    req.on('edn', function () {
      next();
    });
  } else {
    next();
  }
});
app.post('/login', function (req, res, next) {
  console.log(req.body);
  res.end('获取到登陆信息');
});
app.post('/upload', function (req, res, next) {
  console.log(req.body);
  res.end('获取到上传信息了');
});
app.listen(8080, function () {
  console.log('中间件JSON解析服务启动了');
});