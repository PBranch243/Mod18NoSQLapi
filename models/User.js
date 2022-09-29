const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //email validation needed.  research
    },
    //arrayof id values from the thought model
    thoughts: [],
    //array of id values ref to user model
    friends: []
})

//create the user model
const User = model('User', UserSchema);

module.exports = User;