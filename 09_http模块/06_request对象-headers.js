const http = require('http');

const server = http.createServer((req, res) => {
    console.log('header', req.headers);
    res.end('hello world')

});

server.listen(8080, () => {
    console.log('服务启动了');
})