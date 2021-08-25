const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hello use');
    next();
})

app.get('/home', (req ,res, next) => {
    console.log('hello home');
    next();
});
app.get('/home', (req, res, next) => {
    console.log('hello home 01');
    next();
}, (req, res, next) => {
    console.log('hello home 02');
    next();
}, (req, res, next) => {
    console.log('hello home 03');
    res.end('连续中间件访问结束了～')
});


app.listen(8080, () => {
    console.log('连续中间件服务启动了');
})