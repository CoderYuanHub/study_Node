const express = require('express');
const userRouter = require('./router/user')

const app = express();
app.use('/user', userRouter)

app.listen(8080, () => {
    console.log('路由服务启动了～');
})