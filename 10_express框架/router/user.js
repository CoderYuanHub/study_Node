const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json(["wyy", "corderwhy"])
});

router.get('/:id', (req, res, next) => {
    res.json(`${req.params.id}`);
});

router.post('/reg', (req, res, next) => {
    res.json(req.query);
})


module.exports = router;