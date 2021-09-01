"use strict";

var Koa = require('koa');

var multer = require('koa-multer');

var Router = require('koa-router');

var app = new Koa();
var upload = multer({
  dest: 'uploads/'
});
var uploadRouter = new Router({
  prefix: '/upload'
});
uploadRouter.post('/avator', upload.single('file'), function (ctx, next) {
  console.log(ctx.req.file);
  ctx.response.body = 'hello upload!';
});
app.use(uploadRouter.routes());
app.listen(8080, function () {
  console.log('Koa处理图像上传服务启动了～');
});