const http = require('http');
// 创建服务器
// 方法一
const sever = new http.Server((req, res) => {
    res.end('新的服务启动了')
});

sever.listen(8000, () => {
    console.log('服务一启动了');
})
// 方法二
const serve2 = http.createServer((req, res) => {
    res.end('服务二启动')
})
// 端口号port可不填，会默认分配端口，
serve2.listen(8001, () => {
    console.log('服务二启动了');
    console.log(serve2);
})


