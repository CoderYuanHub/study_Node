"use strict";

var express = require('express');

var app = express(); // app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             req.body =JSON.parse(data.toString());
//         });
//         req.on('end', () => {
//             next();
//         })
//     } else {
//         next();
//     }
// })

app.use(express.json()); // extended
//  true: 那么对urlencoded进行解析时，使用的是第三方库：qs
// false: 那么对urlencoded进行解析时，使用的是Node内置模块：querystring

app.use(express.urlencoded({
  extended: true
}));
app.post('/login', function (req, res, next) {
  console.log(req.body);
  res.end('获取到登陆信息');
});
app.post('/upload', function (req, res, next) {
  console.log(req.body);
  res.end('获取到上传信息了');
});
app.listen(8080, function () {
  console.log('中间件JSON解析服务启动了');
});