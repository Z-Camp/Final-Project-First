const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    authorID: {
        type: Number,
        required: true,
    },
    postID: {
        type: Number,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
        maxlength: 500,
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = model('Comment', CommentSchema);
