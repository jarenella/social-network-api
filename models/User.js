const mongoose = require("../config/connection");
const Thought = require("./Thought");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{type: mongoose.Schema.Types.ObjectId, ref:'Thought'}],
    friends: {type: Array}
})

const User = mongoose.model('User', userSchema);

module.exports = User;