const fs = require('fs');
// 传统的写入文件
// fs.writeFile('./test.txt','data', (err) => {
//     console.log(err);
// });

// Stream的写入方式
const write = fs.createWriteStream('./test.txt', {
    flags: 'a', 
    start: 1 //表示第几个开始写入
});
write.write('你好呀', (err) => {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('写入成功');
    }
});
write.on('close', () => {
    console.log('文件关闭了');
});
write.end("hello World.");

