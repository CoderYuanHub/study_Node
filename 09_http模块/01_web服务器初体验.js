const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
    res.end('hello Server');
});
// 制定服务器的端口号和主机
server.listen(9090, '0.0.0.0', () => {
    console.log('服务启动成功～');
});