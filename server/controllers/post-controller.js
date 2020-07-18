// import models
const Post = require("../models/Post");
const { response } = require("express");

module.exports = {
  // get all users
  async getAllPosts(req, res) {
    // const allPosts= [];
    const posts = await Post.find();
    // posts.map((post)=> {
    //   allPosts.push(post)
    // })
    return res.json(posts);
  },
  // get a single user by either their id or their username
  async getSinglePost({ user = null, params }, res) {
    const foundPost = await Post.findOne({
      $or: [{ authorID: user ? user._id : params.id }, { author: params.username }],
    });

    if (!foundPost) {
      return res.status(400).json({ message: 'Cannot find a post with this id!' });
    }

    res.json(foundUser);
  },
  async searchPosts(req, res) {
    const searchedPosts = await Post.find({ title: `/${req}/i` });
    return res.json(searchedPosts);
  }
};
