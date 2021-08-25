"use strict";

var fs = require('fs');

var reader = fs.createReadStream('./test.txt', {
  start: 3,
  end: 11,
  encoding: 'utf-8',
  highWaterMark: 2
}); // 数据读取过程

reader.on('data', function (data) {
  // 文件暂停读取
  reader.pause();
  console.log(data);
  setTimeout(function () {
    console.log('文件恢复读取'); // 文件恢复读取

    reader.resume();
  }, 1000);
});
reader.on('open', function () {
  console.log('文件被打开');
});
reader.on('close', function () {
  console.log('文件被关闭');
});