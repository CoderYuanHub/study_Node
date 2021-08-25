const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             req.body =JSON.parse(data.toString());
//         });

//         req.on('end', () => {
//             next();
//         })
//     } else {
//         next();
//     }
// })

app.use(express.json());
// extended
//  true: 那么对urlencoded进行解析时，使用的是第三方库：qs
// false: 那么对urlencoded进行解析时，使用的是Node内置模块：querystring
app.use(express.urlencoded({extended: true}))

app.post('/login', (req, res, next) => {
    console.log(req.body);
    res.end('获取到登陆信息');
});

app.post('/upload', (req, res, next) => {
    console.log(req.body);
    res.end('获取到上传信息了');
})

app.listen(8080, () => {
    console.log('中间件JSON解析服务启动了');
})