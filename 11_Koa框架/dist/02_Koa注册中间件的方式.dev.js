"use strict";

var Koa = require('koa');

var app = new Koa();
app.use(function (ctx, next) {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = 'Hello Login!';
    } else {
      ctx.response.body = 'Login Faire';
    }
  } else {
    ctx.response.body = 'hello Koa';
  }
}); // 没有提供下面的注册方式
// methods：app.get()/.post
// path方式：app.use('/home', (ctx, next) => {})
// 连续注册: app.use((ctx, next) => {}, (ctx, next) => {})

app.listen(8080, function () {
  console.log('Koa注册中间件的使用～');
});