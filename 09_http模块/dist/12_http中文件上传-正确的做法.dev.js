"use strict";

var http = require('http');

var qs = require('querystring');

var url = require('url');

var fs = require('fs');

var server = http.createServer(function (req, res) {
  var _url$parse = url.parse(req.url),
      pathname = _url$parse.pathname;

  if (pathname == '/upload') {
    if (req.method === 'POST') {
      // 设置编码
      req.setEncoding('binary');
      var body = '';
      var boundary = req.headers['content-type'].split('; ')[1].split('=')[1];
      req.on('data', function (data) {
        body += data;
      });
      var fileWrite = fs.createWriteStream('./logo.jpeg', {
        flags: 'a+'
      });
      req.on('end', function () {
        // 处理body
        // 1.获取img/png的位置
        var payload = qs.parse(body, "\r\n", ": ");
        var type = payload["Content-Type"]; // 2.开始在imh/png的位置截取

        var typeIndex = body.indexOf(type);
        var typeLength = type.length;
        var imgData = body.substring(typeIndex + typeLength); // 3.将中间的空格去掉

        imgData = imgData.replace(/^\s\s*/, ''); // 3.查找boundary位置

        var boundaryIndex = imgData.indexOf("--".concat(boundary, "--"));
        imgData = imgData.substring(0, boundaryIndex);
        fs.writeFile('./test.jpg', imgData, {
          encoding: 'binary'
        }, function (error) {
          if (error) {
            console.log('上传失败');
            return;
          } else {
            console.log('上传成功');
          }
        });
        res.end('启动了');
      });
    }
  }
});
server.listen(8080, function () {
  console.log('服务启动成功～');
});