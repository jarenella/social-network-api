const router = require('express').Router();

// /thoughts route
// sends data of all thoughts in database
router.get('/', (req, res) => {
    res.send("hi thoughts route");
});

// /thoughts/:id route
// sends data for one thought by its id
router.get('/:id', (req, res) => {
    res.send("u a gonna geta thought by its id");
})

// /thoughts post route
// creates a new thought (post)
router.post('/', (req, res) => {
    res.send("ur gonna add a new thought/post through this route")
})

// /thoughts put route
// updates a thought/posts info
router.put('/', (req, res) => {
    res.send("update thought info")
})

// /thoughts delete route
// deletes a thought from the database
router.delete('/', (req, res) => {
    res.send('delete thought');
})

// /thoughts/:thoughtID/reaction post route
// creates a reaction to the post specified in the request parameters
router.post('/:thoughtID/reaction', (req, res) => {
    res.send(`create a reaction to the post of ID ${req.params.id}`)
})

// /thoughts/:thoughtID/reaction delete route
// deletes a reaction from a post specified in the request parameters
router.delete('/:thoughtID/reaction', (req, res) => {
    res.send(`delete a reaction to the post of ID ${req.params.id}`)
})

module.exports = router;