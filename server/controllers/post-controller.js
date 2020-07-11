const { Post, User } = require("../models");

const { db } = require("../models/User");

const postController = {};

exports.load = async (req, res, next, id) => {
    try {
        req.post = await Post.findById(id);
        if (!req.post) return res.status(404).json({ message: 'Post not found' });
    } catch (err) {
        return next(err);
    }
    next();
};

exports.show = async (req, res) => {
    const post = await Post.findByIdAndUpdate(
        req.post.id,
        { $inc: { views: 1 } },
        { new: true }
    );
    res.json(post);
}
exports.listByCategory = async (req, res) => {
    const category = req.params.category;
    const posts = await Post.find({ category });
    res.json(posts);
}
exports.listByUser = async (req, res) => {
    const username = req.params.user;
    const author = await User.findOne({ username });
    const posts = await Post.find({ author: author.id });
    res.json(posts);
}
exports.create = async (req, res, next) => {
    const { title, link, category, type, text } = req.body;
    const author = req.user.id;
    const post = await Post.create({
        title,
        link,
        author,
        category,
        type,
        text
    });
    res.status(201).json(post);
};
exports.destroy = async (req, res) => {
    await req.post.remove();
    res.json({ message: 'success' })
}