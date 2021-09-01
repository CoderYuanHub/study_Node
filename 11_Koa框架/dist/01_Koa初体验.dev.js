"use strict";

var Koa = require('koa');

var app = new Koa(); // use注册中间件

app.use(function (context, dispatch) {
  context.response.body = 'Hello Koa';
});
app.listen(8080, function () {
  console.log('Koa服务启动了～');
});