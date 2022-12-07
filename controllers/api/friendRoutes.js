const router = require('express').Router();
const User = require("../../models/User");

// /friends/:id post route
// adding a friend
router.post('/:id', async (req, res) => {
    const friend = await User.findOne({_id: req.params.id}); //ID of the friend
    const user = await User.findOne({_id: req.body.id}); //ID of the user adding the friend
    user.friends.push(friend._id);
    user.save();
    res.send(`Request recieved to add friend by the ID of ${req.params.id}`)
})

// /friends/:id delete route
// removing a friend
router.delete('/:id', async (req, res) => {
    const user = await User.findOne({ _id: req.body.id }); //find user with this id
    const exFriend = user.friends.indexOf(req.params.id); //find the index of the friend-to-be-removed's ID
    user.friends.splice(exFriend, 1); //remove the item from friend list array of that index
    user.save();
    res.send(`User removed from friends list. Your current list is ${user.friends}`);
})

module.exports = router;