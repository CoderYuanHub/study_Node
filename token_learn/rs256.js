// openssl生成私钥和公钥
// 进入openssl
// openssl
// 1.生产私钥
// genrsa -out private.key 1024
// 2.生成公钥
// rsa -in private.key -pubout -out public.key
const Koa = require('koa');
const Router = require('koa-router');
const JWT = require('jsonwebtoken');
const fs = require('fs');

const app = new Koa();
const userRouter = new Router();
const PRIVATE_KEY = fs.readFileSync('./keys/private.key');
const PUBLIC_KEY = fs.readFileSync('./keys/public.key');

userRouter.post('/login', (ctx, next) => {
    const user = {'name': "wyy", 'password': "123456"}
    const jwt = JWT.sign(user, PRIVATE_KEY, {
        expiresIn: 10, // 设置token时长，单位秒
        algorithm: 'RS256' //加密方式
        
    });
    ctx.body = jwt;


});

userRouter.get('/token', (ctx, next) => {
    const { authorization } = ctx.headers;
    const token = authorization.replace('Bearer ', '');
    
    try {
        const jwt = JWT.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256'] //解密方式，可支持多个，解密成功即可返回成功值
        });
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