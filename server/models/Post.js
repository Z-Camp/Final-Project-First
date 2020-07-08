const { Schema } = require('mongoose');
const commentSchema = require('./Comment')


const postSchema = new Schema({
    author: {
		type: String,
		required: true,
	},
    authorID: {
        type: Number,
        required: true,
    },
	image: {
		type: String,
	},
	link: {
		type: String,
	},
	title: {
		type: String,
		required: true,
    },
    postText: {
        type: String,
        required: true,
        maxlength: 500,
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now,
    },
    savedComments: [commentSchema]
});

const Post = model('Post', postSchema);

module.exports = postSchema;
