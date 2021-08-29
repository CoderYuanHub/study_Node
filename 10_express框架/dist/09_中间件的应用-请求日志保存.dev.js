"use strict";

var express = require('express');

var morgan = require('morgan');

var fs = require('fs');

var app = express();
var fsWrit = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
});
app.use(morgan('combined', {
  stream: fsWrit
}));
app.post('/login', function (req, res, next) {
  res.end('日志保存了');
});
app.get('/info', function (req, res, next) {
  res.end('get请求');
});
app.listen(8080, function () {
  console.log('日志保存服务启动了～');
});