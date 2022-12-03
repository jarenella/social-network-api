const router = require('express').Router();

// /users get route
// sends data of all users in database
router.get('/', (req, res) => {
    res.send("hi user route");
});

// /users/:id get route
// sends data for one user by their id
router.get('/:id', (req, res) => {
    res.send(`u a gonna geta user by their id, which is ${req.params.id}`);
})

// /users post route
// creates a new user
router.post('/', (req, res) => {
    res.send("ur gonna add a new user through this route")
})

// /users put route
// updates a users info
router.put('/', (req, res) => {
    res.send("update user info")
})

// /users delete route
// deletes a user from the database
router.delete('/', (req, res) => {
    res.send('delete user');
})

module.exports = router;