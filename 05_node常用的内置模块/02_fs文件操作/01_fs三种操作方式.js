const fs = require('fs');

// 文件路径
const filePath = './abx.txt';

// 方法一：同步读取，会堵塞
const infoSync = fs.statSync(filePath);

console.log('同步读取，会堵塞,先执行这里信息');
console.log(infoSync);

// 方法二：异步获取
const info = fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(stats);
    }
});

console.log(infoSync);
console.log('异步获取,先执行这里信息');


// 方法三：Promise
fs.promises.stat(filePath).then(stats => {
    console.log(stats);
}).catch(err => {
    console.error(err);
})