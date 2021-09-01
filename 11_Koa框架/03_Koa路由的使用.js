const Koa = require('koa');
const app = new Koa();
const userRouter = require('./router/user');

app.use(userRouter.routes());
// 用于处理没有实现的方法
app.use(userRouter.allowedMethods())

app.listen(8080, () => {
    console.log('Koa路由服务启动了！');
})