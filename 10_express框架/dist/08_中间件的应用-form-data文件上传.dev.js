"use strict";

var express = require('express');

var multer = require('multer');

var path = require('path');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
var app = express();
app.post('/upload', upload.any(), upload.single('file'), function (req, res, next) {
  res.end('文件上传成功了');
});
app.listen(8080, function () {
  console.log('form-data文件上传服务启动了～');
});