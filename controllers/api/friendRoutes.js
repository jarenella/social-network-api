const router = require('express').Router();

// /friends/:id post route
// adding a friend
router.post('/:id', (req, res) => {
    res.send(`route to add friend by the ID of ${req.params.id}`)
})

// /friends/:id delete route
// removing a friend
router.delete('/:id', (req, res) => {
    res.send(`route to remove friend by the ID of ${req.params.id}`)
})

module.exports = router;