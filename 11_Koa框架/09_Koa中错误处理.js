const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    const isLogin = false;
    if (!isLogin) {
        ctx.app.emit('error', new Error('您还没有登陆'), ctx);
    }
})
app.on('error', (error, ctx) => {
    ctx.body = error.message;
})

app.listen(8080, () => {
    console.log('错误处理服务启动了');
})