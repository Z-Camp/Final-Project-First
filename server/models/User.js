const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schemas from Post.js and Comment.js
const postSchema = require('./Post');
const commentSchema = require('./Comment');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, 'Must use a valid email address'],
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
      link:{
        type: String,
        required: true,
        default: "https://img.icons8.com/wired/64/000000/penis.png"
      }
    },
		// savedPosts/Comments will be arrays that of posts/comments by the user that will follow their relative schemas
		savedPosts: [postSchema],
		saveComments: [commentSchema],
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// hash user password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get extra fields called `commentCount` and 'postCount' with the number of saved posts/ comments the user has
userSchema.virtual('postCount').get(function () {
	return this.savedPosts.length;
});

userSchema.virtual('commentCount').get(function () {
	return this.savedComments.length;
});

const User = model('User', userSchema);

module.exports = User;
