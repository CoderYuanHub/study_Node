const Koa = require('koa');
const Router = require('koa-router');
const JWT = require('jsonwebtoken');

const SECRET_PASS = '123445436'


const app = new Koa();
const userRouter = new Router();

userRouter.post('/login', (ctx, next) => {
    const user = {'name': "wyy", 'password': "123456"}
    const jwt = JWT.sign(user, SECRET_PASS, {
        expiresIn: 10 // 设置token时长，单位秒
    });
    ctx.body = jwt;


});

userRouter.get('/token', (ctx, next) => {
    const { authorization } = ctx.headers;
    const token = authorization.replace('Bearer ', '');
    
    try {
        const jwt = JWT.verify(token, SECRET_PASS);
        ctx.body = jwt;

    } catch (error) {
        ctx.body = '获取token失败'
    }
    

})

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8082, () => {
    console.log('tokenLearn服务启动了～');
})