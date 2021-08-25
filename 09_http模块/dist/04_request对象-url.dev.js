"use strict";

var http = require('http');

var url = require('url');

var qs = require('querystring');

var server = http.createServer(function (req, res) {
  console.log(url.parse(req.url));

  var _url$parse = url.parse(req.url),
      pathname = _url$parse.pathname,
      query = _url$parse.query;

  console.log(qs.parse(query));

  var _qs$parse = qs.parse(query),
      name = _qs$parse.name,
      keywork = _qs$parse.keywork;

  console.log(name, keywork);
  res.end('请求结果');
});
server.listen(8080, function () {
  console.log('服务启动了。');
});