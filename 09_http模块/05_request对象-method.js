const http = require('http');
const qs = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if (pathname === '/login') {
        if (req.method === 'POST') {
            // 数据接收是二进制流，
            req.setEncoding('utf-8')
            req.on('data', (data) => {
                // console.log(data.toString());
                console.log(data);
                const { username, passworld } = JSON.parse(data);
                console.log(username, passworld);
            })
            res.end('登陆成功')
        }

    }
});

server.listen(8080, '0.0.0.0', () => {
    console.log('服务启动了');
})