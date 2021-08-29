const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

const app = express();

app.post('/upload',upload.any(),  upload.single('file'), (req, res, next) => {
    res.end('文件上传成功了')
})


app.listen(8080, () => {
    console.log('form-data文件上传服务启动了～');
})