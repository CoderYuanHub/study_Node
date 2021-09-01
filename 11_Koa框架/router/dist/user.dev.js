"use strict";

var Router = require('koa-router');

var router = new Router({
  'prefix': '/users'
});
router.get('/', function (ctx, next) {
  ctx.response.body = 'get methods';
});
router.put('/', function (ctx, next) {
  ctx.response.body = 'put methods';
});
module.exports = router;