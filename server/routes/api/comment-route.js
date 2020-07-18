const router = require('express').Router();

const { loadComments, createComment, deleteComment } = require('../../controllers/comment-controller');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/comment').get(loadComments);

router.route('/post/:post').get(createComment);

router.route('/post/:post/:comment').get(deleteComment);

module.exports = router;
