const express = require('express');
const multer = require('multer');

const upload = multer();
const app = express();

app.use(upload.any());


app.post('/login', (req, res, next) => {
    console.log(req.body);
    console.log('解析好数据了');
    res.end('请求成功了')
})



app.listen(8080, ()=> {
    console.log('form-data服务启动了');
})