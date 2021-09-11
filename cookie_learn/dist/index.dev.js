"use strict";

var Koa = require('koa');

var Router = require('koa-router');

var Session = require('koa-session');

var app = new Koa();
var testRouter = new Router();
var userSession = Session({
  key: 'sessionId',
  maxAge: 5 * 1000,
  signed: true //默认开启的,使用加密签名

}, app);
app.keys = ['abc'];
app.use(userSession); // cookie的用法

testRouter.get('/learn', function (ctx, next) {
  console.log('learn');
  ctx.cookies.set('name', 'wyy1', {
    maxAge: 50 * 1000 //保留时长

  });
});
testRouter.get('/demo', function (ctx, next) {
  console.log('demo');
  var cookie = ctx.cookies.get('name');
  ctx.body = cookie;
}); // session 的用法

testRouter.get('/setsession', function (ctx, next) {
  var id = 110,
      name = 'wyy';
  ctx.session.user = {
    id: id,
    name: name
  };
  ctx.body = 'session';
});
testRouter.get('/getsession', function (ctx, next) {
  var session = ctx.session.user;
  console.log(session);
  ctx.body = "session".concat(session);
});
app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen(8081, function () {
  console.log('服务启动了');
});