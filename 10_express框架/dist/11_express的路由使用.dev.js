"use strict";

var express = require('express');

var userRouter = require('./router/user');

var app = express();
app.use('/user', userRouter);
app.listen(8080, function () {
  console.log('路由服务启动了～');
});