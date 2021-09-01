"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res, next) {
  res.json(["wyy", "corderwhy"]);
});
router.get('/:id', function (req, res, next) {
  res.json("".concat(req.params.id));
});
router.post('/reg', function (req, res, next) {
  res.json(req.query);
});
module.exports = router;