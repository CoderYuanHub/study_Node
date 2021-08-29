"use strict";

var express = require('express');

var multer = require('multer');

var upload = multer();
var app = express();
app.use(upload.any());
app.post('/login', function (req, res, next) {
  console.log(req.body);
  console.log('解析好数据了');
  res.end('请求成功了');
});
app.listen(8080, function () {
  console.log('form-data服务启动了');
});