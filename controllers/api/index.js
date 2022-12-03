const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("hi");
});

router.get('/test', (req, res) => {
    res.send("hi2");
});

module.exports = router;