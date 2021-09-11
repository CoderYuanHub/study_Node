"use strict";

var Koa = require('koa');

var Router = require('koa-router');

var JWT = require('jsonwebtoken');

var SECRET_PASS = '123445436';
var app = new Koa();
var userRouter = new Router();
userRouter.post('/login', function (ctx, next) {
  var user = {
    'name': "wyy",
    'password': "123456"
  };
  var jwt = JWT.sign(user, SECRET_PASS, {
    expiresIn: 10 // 设置token时长，单位秒

  });
  ctx.body = jwt;
});
userRouter.get('/token', function (ctx, next) {
  var authorization = ctx.headers.authorization;
  var token = authorization.replace('Bearer ', '');

  try {
    var jwt = JWT.verify(token, SECRET_PASS);
    ctx.body = jwt;
  } catch (error) {
    ctx.body = '获取token失败';
  }
});
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.listen(8082, function () {
  console.log('tokenLearn服务启动了～');
});