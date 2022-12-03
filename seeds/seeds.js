const Thought = require("../models/Thought");
const User = require("../models/User");
const Reaction = require("../models/Reaction");

async function seedDB() {

    //seed users
    const user = await  User.create([
        { username: 'datkidd', email: "coolkid@email.com" }, 
        { username: 'banana', email: "banana@email.com" }
    ]);
    console.log(user + "\n-----------\nusers seeded\n-----------");

    //seed thoughts (aka posts)
    const thought = await Thought.create([
        { body: 'Hey guys this is my post isnt it so cool', userID: user[0] }, 
        { body: 'hey lwhats up ok', userID: user[1] }
    ]);
    console.log(thought + "\n-----------\nposts seeded\n-----------");

    //populate the associated thoughts into their users
    //const firstThought = await Thought.findOne({userID: user[0]._id})
    //user[0].thoughts.push(firstThought);

    //seed reactions (aka comments)
    const reaction = await Reaction.create([
        { reactionBody: 'real cool, mannnn', username: "datkidd" }, 
        { reactionBody: 'ok... now this is epic', username: "banana" }
    ])
    console.log(reaction + "\n-----------\nreactions seeded\n-----------");
}

seedDB();