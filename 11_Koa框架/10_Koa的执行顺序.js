const Koa = require('koa');

const app = new Koa();
app.use((ctx, next) => {
    console.log(1);
    next();
    console.log(2);
    ctx.body = '2';

});
app.use((ctx, next) => {
    console.log(3);
    next();
    console.log(4);
    ctx.body = '1';
});
app.use((ctx, next) => {
    console.log(5);
});


app.listen(8080, () => {
    console.log('koa执行顺序启动了～');
})