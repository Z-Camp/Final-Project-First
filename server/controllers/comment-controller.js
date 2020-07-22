// import models
const Comment = require("../models/Comment");
const Post = require('../models/Post');


module.exports = {
    async loadComments(req, res, next, id) {
        try {
            req.comment = await req.post.comments.id(id);
            if (!req.comment) return next(new Error('comment not found'));
        } catch (err) {
            return next(err);
        }
        next();
    },

    async createComment({ user, body }, res) {
        console.log(user);
        console.log(post);
        try {
            const newComment = await Comment.create({
                author: user.username,
                authorID: user._id,
                postID: post._id,
                commentText: body.commentText,
            })
            return res.json(newComment);
        } catch (err) {
            console.log(err)
            return res.status(400).json(err);
        }
    },
    async deleteComment(req, res) {
        try {
            const post = await req.post.removeComment(req.params.comment);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }
}