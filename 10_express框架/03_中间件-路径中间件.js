const express = require('express');

const app = express();

// 中间件优先匹配第一个
app.use((req, res, next) => {
    console.log('hello world');
    next();
});

// 路径匹配中间件
app.use('/home', (req, res, next) => {
    console.log('hello home');
    next();
});
app.use('/home', (req, res ,next) => {
    console.log('hello home 02');
    res.end('hello home 02');
})
app.listen(8080, () => {
    console.log('路径中间件服务启动了～');
})