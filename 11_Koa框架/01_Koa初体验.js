const Koa = require('koa');

const app = new Koa();
// use注册中间件
app.use((context, dispatch) => {
    context.response.body = 'Hello Koa';
});

app.listen(8080, () => {
    console.log('Koa服务启动了～');
})