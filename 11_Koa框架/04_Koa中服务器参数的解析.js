const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const UserRouter = new Router({'prefix': '/users'});
UserRouter.get('/:id', (ctx, next) => {
    console.log(ctx.request.params);
    console.log(ctx.request.query);
})

app.use(UserRouter.routes())

app.listen(8080, () => {
    console.log('服务器中参数解析～');
})