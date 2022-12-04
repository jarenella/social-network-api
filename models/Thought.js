const mongoose = require("../config/connection");

const thoughtSchema = new mongoose.Schema({
    body: String,
    createdAt: {
        type: Date, 
        default: Date.now
    },
    userID: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reactions : [{type: mongoose.Schema.Types.ObjectId, ref:'Reaction'}]
})

//example of how to add a method
// thoughtSchema.methods.speak = function speak() {
//     console.log("hiiiii");
// }

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;