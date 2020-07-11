const { Schema, model } = require('mongoose');
const CommentSchema = require('./Comment.js').schema;


const PostSchema = new Schema({
    author: {
		type: String,
		required: true,
	},
    authorID: {
        type: String,
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
    savedComments: []
});

CommentSchema.set('toJSON', { getters: true });
CommentSchema.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    return obj;
};

PostSchema.methods.addComment = function (author, body) {
    this.comments.push({ author, body });
    return this.save();
};
PostSchema.methods.removeComment = function (id) {
    const comment = this.comments.id(id);
    if (!comment) throw new Error('Comment not found');
    comment.remove();
    return this.save();
};

const Post = model('Post', PostSchema);
module.exports = Post
