const http = require('http');

const server = new http.Server((req, res) => {
    res.write('响应结果');
    res.end('hello world');
});

server.listen(8080, () => {
    console.log('服务启动了');
})