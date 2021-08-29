const express = require('express');

const app = express();

app.get('/product/:id', (req, res, next) => {
    console.log(req.params);
    res.end('product请求');
});

app.get('/login', (req, res, next) => {
    console.log(req.query);
    res.end('login请求');
})

app.listen(8080, () => {
    console.log('request参数服务启动了～');
})