const http = require('http');

const server = new http.Server((req, res) => {
    console.log(res);
    // 设置状态码
    // 方式一：
    // res.statusCode = 400;
    // 方法二：
    res.writeHead(403);

    res.end('hello world');
});

server.listen(8080, () => {
    console.log('服务启动了');
})