"use strict";

var http = require('http');

var qs = require('querystring');

var url = require('url');

var server = http.createServer(function (req, res) {
  var _url$parse = url.parse(req.url),
      pathname = _url$parse.pathname;

  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 数据接收是二进制流，
      req.setEncoding('utf-8');
      req.on('data', function (data) {
        // console.log(data.toString());
        console.log(data);

        var _JSON$parse = JSON.parse(data),
            username = _JSON$parse.username,
            passworld = _JSON$parse.passworld;

        console.log(username, passworld);
      });
      res.end('登陆成功');
    }
  }
});
server.listen(8080, '0.0.0.0', function () {
  console.log('服务启动了');
});