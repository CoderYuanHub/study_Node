const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if (pathname === '/upload') {
        if (req.method === 'POST') {
            const fileWrite = fs.createWriteStream('./logo.png', {flags: 'a+'});
            req.on('data', (data) => {
                fileWrite.write(data);
                console.log('w', data);
            })
            req.on('end', () => {
                console.log('上传成功。');
                res.end('上传成功');
            })
        } else {
            res.end('请求方法错误')
        }
    } else {
        res.end('请求接口不存在。')
    }
});

server.listen(8080, () => {
    console.log('服务启动成功了～');
})
