"use strict";

var http = require('http');

var url = require('url');

var qs = require('querystring');

var fs = require('fs');

var server = http.createServer(function (req, res) {
  var _url$parse = url.parse(req.url),
      pathname = _url$parse.pathname;

  if (pathname === '/upload') {
    if (req.method === 'POST') {
      var fileWrite = fs.createWriteStream('./logo.png', {
        flags: 'a+'
      });
      req.on('data', function (data) {
        fileWrite.write(data);
        console.log('w', data);
      });
      req.on('end', function () {
        console.log('上传成功。');
        res.end('上传成功');
      });
    } else {
      res.end('请求方法错误');
    }
  } else {
    res.end('请求接口不存在。');
  }
});
server.listen(8080, function () {
  console.log('服务启动成功了～');
});