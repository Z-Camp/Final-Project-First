// import models
const Comment = require("../models/Comment");


module.exports = {
    loadComments = async (req, res, next, id) => {
        try {
            req.comment = await req.post.comments.id(id);
            if (!req.comment) return next(new Error('comment not found'));
        } catch (err) {
            return next(err);
        }
        next();
    },

    //single user by either their id or their username
    createComment = async (req, res, next) => {
        try {
            const post = await req.post.addComment(req.user.id, req.body.comment);
            res.status(201).json(post);
        } catch (err) {
            next(err);
        }
    },
    deleteComment = async (req, res) => {
        try {
            const post = await req.post.removeComment(req.params.comment);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }
}