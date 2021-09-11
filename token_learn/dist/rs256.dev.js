"use strict";

// openssl生成私钥和公钥
// 进入openssl
// openssl
// 1.生产私钥
// genrsa -out private.key 1024
// 2.生成公钥
// rsa -in private.key -pubout -out public.key
var Koa = require('koa');

var Router = require('koa-router');

var JWT = require('jsonwebtoken');

var fs = require('fs');

var app = new Koa();
var userRouter = new Router();
var PRIVATE_KEY = fs.readFileSync('./keys/private.key');
var PUBLIC_KEY = fs.readFileSync('./keys/public.key');
userRouter.post('/login', function (ctx, next) {
  var user = {
    'name': "wyy",
    'password': "123456"
  };
  var jwt = JWT.sign(user, PRIVATE_KEY, {
    expiresIn: 10,
    // 设置token时长，单位秒
    algorithm: 'RS256' //加密方式

  });
  ctx.body = jwt;
});
userRouter.get('/token', function (ctx, next) {
  var authorization = ctx.headers.authorization;
  var token = authorization.replace('Bearer ', '');

  try {
    var jwt = JWT.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'] //解密方式，可支持多个，解密成功即可返回成功值

    });
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