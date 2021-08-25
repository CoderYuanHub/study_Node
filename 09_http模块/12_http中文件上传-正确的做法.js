const http = require('http');
const qs = require('querystring');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if(pathname == '/upload') {
        if (req.method === 'POST') {
            // 设置编码
            req.setEncoding('binary');
            let body = '';
            let boundary = req.headers['content-type'].split('; ')[1].split('=')[1];
            req.on('data', (data) => {
                body += data;
            });
            const fileWrite = fs.createWriteStream('./logo.jpeg', { flags: 'a+' });
            
            req.on('end', () => {
                // 处理body
                // 1.获取img/png的位置
                const payload = qs.parse(body, "\r\n", ": ");
                const type = payload["Content-Type"];
                // 2.开始在imh/png的位置截取
                const typeIndex = body.indexOf(type);
                const typeLength = type.length;
                let imgData = body.substring(typeIndex + typeLength);
                // 3.将中间的空格去掉
                imgData = imgData.replace(/^\s\s*/, '');
                // 3.查找boundary位置
                const boundaryIndex = imgData.indexOf(`--${boundary}--`);
                imgData = imgData.substring(0, boundaryIndex);
                fs.writeFile('./test.jpg', imgData , {encoding: 'binary'}, (error) => {
                    if (error) {
                        console.log('上传失败');
                        return;
                    } else {
                        console.log('上传成功');
                    }
                });
                res.end('启动了')
            });
        }
    }
});
server.listen(8080, () => {
    console.log('服务启动成功～');
})