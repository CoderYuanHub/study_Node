"use strict";

var Koa = require('koa');

var app = new Koa();
app.use(function (ctx, next) {
  var isLogin = false;

  if (!isLogin) {
    ctx.app.emit('error', new Error('您还没有登陆'), ctx);
  }
});
app.on('error', function (error, ctx) {
  ctx.body = error.message;
});
app.listen(8080, function () {
  console.log('错误处理服务启动了');
});