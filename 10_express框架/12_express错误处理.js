const express = require('express');

const app = express();
const USER_NOT_EXIST = 'user is not exist';

app.post('/login', (req, res, next) => {
    const isExit = false;
    if (isExit) {
        res.end('登陆成功～')
    } else {
        next(new Error(USER_NOT_EXIST))
    }
})


app.use((err, req, res, next) => {
    let status = 400;
    let message = '';
    switch (err.message) {
        case USER_NOT_EXIST:
            message = 'user is not exist';
            break;
    
        default:
            message = 'NOT FOUND~';
            status = 404;
            break;
    }
    res.json({
        errorCode: status,
        errormsg: message
    })
})

app.listen(8080, () => {
    console.log('错误处理服务启动了～');
})