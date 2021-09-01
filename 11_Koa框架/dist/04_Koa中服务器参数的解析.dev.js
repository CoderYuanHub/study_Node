"use strict";

var Koa = require('koa');

var Router = require('koa-router');

var app = new Koa();
var UserRouter = new Router({
  'prefix': '/users'
});
UserRouter.get('/:id', function (ctx, next) {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
});
app.use(UserRouter.routes());
app.listen(8080, function () {
  console.log('服务器中参数解析～');
});