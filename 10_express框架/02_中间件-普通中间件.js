const express = require('express');

const app = express();
// 编写一个普通的中间件
// use注册一个中间件（回调函数）
app.use((req, res, next) => {
    console.log('注册了01普通的中间件');
    res.write('中间件一');
    next();
});

app.use((req, res, next) => {
    console.log('注册了02普通的中间件');
    res.write('中间件二');

    next();
})

app.use((req, res, next) => {
    console.log('注册了03普通的中间件');
    res.end('中间件二');
})


app.listen(8080, () => {
    console.log('普通中间件启动～');
})