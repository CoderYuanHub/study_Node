const Koa = require('koa');
const multer = require('koa-multer');
const Router = require('koa-router');
const app = new Koa();

const upload = multer({ dest: 'uploads/' });

const uploadRouter = new Router({prefix: '/upload'});
uploadRouter.post('/avator', upload.single('file'), (ctx, next) => {
    console.log(ctx.req.file);
    ctx.response.body = 'hello upload!'
})
app.use(uploadRouter.routes())

app.listen(8080, () => {
    console.log('Koa处理图像上传服务启动了～');
})