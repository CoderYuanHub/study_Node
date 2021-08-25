const fs = require('fs');
// 引入sharp的库
const sharp = require('sharp');

// fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
//     console.log('object', data);
// })
// 复制一份文件
// fs.readFile('./IMG_4427.png', (err, data) => {
//     console.log(data);
//     fs.writeFile('./foo.png', data, (err) => {
//         console.log(err);
//     })
// })

// sharp库的使用
sharp('./IMG_4427.png').resize(20, 20).toFile('./foosharp.png');

