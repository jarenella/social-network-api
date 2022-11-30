const mongoose = require("mongoose");

const UniqueReqString = {
    type: String,
    required: true,
    unique: true
}

const userSchema = mongoose.Schema(
    {
        username: UniqueReqString,
        email: UniqueReqString,
        thoughts: { type: Array },
        friends: { type: Array }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('users', userSchema);