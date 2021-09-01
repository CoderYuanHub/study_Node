const Koa = require('koa');
const app = new Koa();
app.use((ctx, next) => {
    // ctx.response.body 代理出来的，与下面方法是一致
    ctx.body = 'hello world';
    // ctx.response.body = 'hello body'
})
app.listen(8080, () => {
    console.log('koa服务启动了～');
})