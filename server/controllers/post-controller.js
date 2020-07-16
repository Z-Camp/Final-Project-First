// import models
const Post = require("../models/Post");

module.exports = {
  // get all users
  async getAllPosts(req, res) {
    const allPosts= [];
    const posts = await Post.find();
    allPosts.push(posts)
    return res.json(allPosts);
  },
  // get a single user by either their id or their username
  async getSinglePost({ user = null, params }, res) {
    const foundPost = await Post.findOne({
      $or: [{ aithorID: user ? user._id : params.id }, { author: params.username }],
    });

    if (!foundPost) {
      return res.status(400).json({ message: 'Cannot find a post with this id!' });
    }

    res.json(foundUser);
  },
  async searchPosts(req, res){
      const searchedPosts = await Post.find({title:`/${req}/i`});
      return res.json(searchedPosts);
  }
};
