const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const fsWrit  = fs.createWriteStream('./logs/access.log', {flags: 'a+'});
app.use(morgan('combined', {stream: fsWrit}))

app.post('/login', (req, res, next) => {
    res.end('日志保存了')
});

app.get('/info', (req, res, next) => {
    res.end('get请求')
})

app.listen(8080, () => {
    console.log('日志保存服务启动了～');
})