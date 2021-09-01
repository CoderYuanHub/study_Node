"use strict";

var Koa = require('koa');

var app = new Koa();

var userRouter = require('./router/user');

app.use(userRouter.routes()); // 用于处理没有实现的方法

app.use(userRouter.allowedMethods());
app.listen(8080, function () {
  console.log('Koa路由服务启动了！');
});