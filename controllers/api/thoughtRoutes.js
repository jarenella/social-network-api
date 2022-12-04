const router = require('express').Router();
const Reaction = require('../../models/Reaction');
const Thought = require('../../models/Thought');

// /thoughts route
// sends data of all thoughts in database
router.get('/', async (req, res) => {
    const thoughts = await Thought.find({});
    res.send(thoughts);
});

// /thoughts/:id route
// sends data for one thought by its id
router.get('/:id', async (req, res) => {
    const thought = await Thought.findOne({_id: req.params.id});
    res.send(thought);
})

// /thoughts post route
// creates a new thought (post)
router.post('/', async (req, res) => {
    const postingUserID = req.body.userID;
    const postText = req.body.postText;
    const newThought = await Thought.create([
        { body: postText, userID: postingUserID }
    ])
    res.send("Post request successfully recieved!");
})

// /thoughts/:id put route
// updates a thought/posts info
router.put('/:id', async(req, res) => {
    const newInfo = {body: req.body.postText};
    const postToUpdate = await Thought.findOne({_id: req.params.id});
    const updatedPost = await postToUpdate.updateOne(newInfo);
    res.send("Put request successfully recieved");
})

// /thoughts/:id delete route
// deletes a thought from the database
router.delete('/:id', async (req, res) => {
    const deletedPost = await Thought.deleteOne({_id: req.params.id});
    res.send("Delete request successfully recieved");
})

// /thoughts/reaction/:thoughtID post route
// creates a reaction to the post specified in the request parameters
router.post('/reaction/:thoughtID', async (req, res) => {
    const reactionBody = req.body.reactionBody;
    const userName = req.body.username;
    const reactedThought = await Thought.findOne({_id: req.params.thoughtID});
    const reaction = await Reaction.create({reactionBody: reactionBody, username: userName, thoughtID: reactedThought});
    res.send(`Reaction added to thought of ID: ${req.params.thoughtID}`);
})

// /thoughts/reaction/:thoughtID delete route
// deletes a reaction from a post specified in the request parameters
router.delete('/reaction/:reactionID', async (req, res) => {
    const deletedReaction = await Reaction.deleteOne({_id: req.params.reactionID});
    res.send(`Request to delete a reaction of ID: ${req.params.reactionID} successfully recieved`);
})

module.exports = router;