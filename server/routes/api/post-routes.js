const router = require('express').Router();
const {
  getAllPosts,
  getSinglePost,
  searchPosts,
  addComment
} = require('../../controllers/post-controller');

const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').get(getAllPosts)

router.route('/:id').get(getSinglePost).put(authMiddleware, addComment);

router.route('/:searchInput').get(searchPosts);

module.exports = router;
