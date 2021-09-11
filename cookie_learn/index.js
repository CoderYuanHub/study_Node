const Koa = require('koa');
const Router = require('koa-router');
const Session = require('koa-session');


const app = new Koa();
const testRouter = new Router();
const userSession = Session({
    key: 'sessionId',
    maxAge: 5 * 1000,
    signed: true //默认开启的,使用加密签名
}, app)
app.keys = ['abc'];
app.use(userSession)


// cookie的用法
testRouter.get('/learn', (ctx, next) => {
    console.log('learn');
    ctx.cookies.set('name', 'wyy1', {
        maxAge: 50 * 1000 //保留时长
    })
});

testRouter.get('/demo', (ctx, next) => {
    console.log('demo');

    const cookie = ctx.cookies.get('name');
    ctx.body = cookie;
})

// session 的用法
testRouter.get('/setsession', (ctx, next) => {
    const id = 110, name = 'wyy';
    ctx.session.user = {id, name};
    ctx.body = 'session';

})

testRouter.get('/getsession', (ctx, next) => {
    const session = ctx.session.user;
    console.log(session);

    ctx.body = `session${session}`;
})


app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8081, () => {
    console.log('服务启动了');
})