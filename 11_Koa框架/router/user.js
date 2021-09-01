const Router = require('koa-router');
const router = new Router({'prefix': '/users'});
router.get('/', (ctx, next) => {
    ctx.response.body = 'get methods';
})

router.put('/', (ctx, next) => {
    ctx.response.body = 'put methods';
})

module.exports = router;
