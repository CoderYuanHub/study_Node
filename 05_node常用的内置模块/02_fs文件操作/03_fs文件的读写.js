const fs = require('fs');

const content = '你好，源。'
// 参数，阅读node文档为准。
// 文件写入
fs.writeFile('./abx.txt', content, {flag: 'a'}, err => {
    console.log(err);
})

// 文件读取
fs.readFile('./abx.txt', {encoding: 'utf-8'} , (err, data) => {
    console.log(data);
})