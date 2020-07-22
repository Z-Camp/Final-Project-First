// import models
const Post = require("../models/Post");
const { response } = require("express");
const Comment = require("../models/Comment");


module.exports = {
  async getAllPosts(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  },

  async getSinglePost({ user = null, params }, res) {
    const foundPost = await Post.findOne({
      _id:params.postId,
    });

    if (!foundPost) {
      return res.status(400).json({ message: 'Cannot find a post with this id!' });
    }

    res.json(foundPost);
  },

  async searchPosts(req, res) {
    const searchedPosts = await Post.find({ title: `/${req}/i` });
    return res.json(searchedPosts);
  },

  async addComment({ user, body }, res) {
    console.log(user);
    console.log(body)
    try {
      const newComment = await Comment.create({
        author: user.username,
        authorID: user._id,
        commentText: body.commentText,
      })
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedComments: newComment } },
        { new: true, runValidators: true }
      );
      return res.json(newComment);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};
