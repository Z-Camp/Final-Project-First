const { Post, User } = require("../models");

// import user model
const { User } = require('../models');
const Post = require('../models/Post')
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { searchPosts } = require("../../client/src/utils/API");

module.exports = {
  // get all users
  async getAllComments(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  // get a single user by either their id or their username
  async getSingleComment({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  async searchPosts(req, res){
      const searchedPosts = await Post.find({title:`/${req}/i`});
      return res.json(searchedPosts);
  }
};
