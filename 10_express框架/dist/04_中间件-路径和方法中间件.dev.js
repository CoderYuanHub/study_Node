"use strict";

var express = require('express');

var app = express();
app.use(function (req, res, next) {
  console.log('中间件～');
  next();
});
app.get('/home', function (req, res, next) {
  console.log('hello home～');
  res.end('hello home ~');
});
app.post('/login', function (req, res, next) {
  console.log('hello login～');
  res.end('hello login ~');
});
app.listen(8080, function () {
  console.log('路径方法中间件');
});