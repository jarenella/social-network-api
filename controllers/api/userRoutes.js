const router = require('express').Router();
const User = require("../../models/User");

// /users get route
// sends data of all users in database
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

// /users/:id get route
// sends data for one user by their id
router.get('/:id', async (req, res) => {
    const user = await User.findOne({_id: `${req.params.id}`});
    res.send(user);
})

// /users post route
// creates a new user
router.post('/', async (req, res) => {
    const newUser = await  User.create([
        { username: req.body.username, email: req.body.email }
    ]);
    res.send(newUser);
})

// /users put route
// updates a users info
router.put('/:id', async (req, res) => {
    const newInfo = {username: req.body.username, email: req.body.email};
    const userToUpdate = await User.findOne({_id: `${req.params.id}`});
    const updatedUser = await userToUpdate.updateOne(newInfo);
    res.send("Put request recieved.");
})

// /users delete route
// deletes a user from the database
router.delete('/:id', async (req, res) => {
    const user = await User.deleteOne({id: req.params.id})
    res.send("Delete request recieved.");
})

module.exports = router;