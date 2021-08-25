const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('中间件～');
    next();
});

app.get('/home', (req, res, next) => {
    console.log('hello home～');
    res.end('hello home ~');
});

app.post('/login', (req, res, next) => {
    console.log('hello login～');
    res.end('hello login ~');
});


app.listen(8080, () => {
    console.log('路径方法中间件');
})