const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    console.log(url.parse(req.url));
    const { pathname, query } = url.parse(req.url);
    console.log(qs.parse(query));
    const {name , keywork} = qs.parse(query);
    console.log(name, keywork);
    res.end('请求结果')
   
});

server.listen(8080, () => {
    console.log('服务启动了。');
})