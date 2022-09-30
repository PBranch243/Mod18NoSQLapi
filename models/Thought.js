const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format timestamp
    }, 
    username: {
        type: String,
        required: true
    },
    reactions: []
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;