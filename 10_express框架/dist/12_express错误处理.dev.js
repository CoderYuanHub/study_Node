"use strict";

var express = require('express');

var app = express();
var USER_NOT_EXIST = 'user is not exist';
app.post('/login', function (req, res, next) {
  var isExit = false;

  if (isExit) {
    res.end('登陆成功～');
  } else {
    next(new Error(USER_NOT_EXIST));
  }
});
app.use(function (err, req, res, next) {
  var status = 400;
  var message = '';

  switch (err.message) {
    case USER_NOT_EXIST:
      message = 'user is not exist';
      break;

    default:
      message = 'NOT FOUND~';
      status = 404;
      break;
  }

  res.json({
    errorCode: status,
    errormsg: message
  });
});
app.listen(8080, function () {
  console.log('错误处理服务启动了～');
});