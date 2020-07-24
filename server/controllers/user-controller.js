// import user model
const { User } = require('../models');
const Post = require('../models/Post')
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // save a post to a user's `savedPosts` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  // also adds new Post to Post collection
  async savePost({ user, body }, res) {
    console.log(user);
    console.log(body)
    try {
      const newPost = await Post.create({
        author: user.username,
        authorID: user._id,
        title: body.title,
        postText: body.postText,
        image: body.image,
        link: body.link
      })
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedPosts: newPost } },
        { new: true, runValidators: true }
      );
      return res.json(newPost);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a post from `savedPosts`
  async deletePost({ user, params }, res) {
    const deletePost = await Post.destroy({
      _id: postID
    })
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedPosts: { postID: params.id } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};
