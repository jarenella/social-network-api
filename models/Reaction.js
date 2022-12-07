const mongoose = require("../config/connection");

const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    thoughtID: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
})

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;