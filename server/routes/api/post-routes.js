const router = require('express').Router();
const {
  getAllPosts,
  getSinglePost,
  searchPosts
} = require('../../controllers/post-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/posts').get(getAllPosts);

router.route('/posts/:id').delete(authMiddleware, deletePost).get(getSinglePost);

router.route('/posts/:searchInput').get(searchPosts);

module.exports = router;
