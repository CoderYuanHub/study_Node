const express = require('express');
// express 其实是一个函数：createApplication
// 返回app
const app = express();
// 监听默认路径
app.get('/', (req, res, next) => {
    res.end('hello express');
});

app.post('/login', (req, res, next) => {
    res.end('hello login');
});

// 开启监听
app.listen(8080, () => {
    console.log('express初体验服务启动成功～');
}); 