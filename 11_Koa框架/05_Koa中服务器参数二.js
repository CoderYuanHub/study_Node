const Koa = require('koa');
// 方法一：引入koa-bodyparser处理JSON以及urencored参数格式
const bodyParser = require('koa-bodyparser');
// 方法二：引入koa-multer处理form-data数据
const multer = require('koa-multer');
const upload = multer();
const app = new Koa();
app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
    // 普通方法参数解析
    console.log(ctx.request.body);
    // koa-multer 方法参数解析
    console.log(ctx.req.body);
    ctx.response.body = 'hello BodyParser'
})

app.listen(8080, () => {
    console.log('Koa中服务器参数二');
})