"use strict";

var Koa = require('koa');

var StaticAccess = require('koa-static');

var app = new Koa(); // StaticAccess(大包后文件路径)，然后直接启动服务即可

app.use(StaticAccess('./'));
app.listen(8080, function () {
  console.log('静态资源部署服务启动了');
});