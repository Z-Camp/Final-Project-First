const router = require('express').Router();
const {
  getAllPosts,
  getSinglePost,
  searchPosts,
  addComment
} = require('../../controllers/post-controller');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').get(getAllPosts);

router.route('/:id').get(getSinglePost);

router.route('/:searchInput').get(searchPosts);

router.route('/:id').post(addComment)

module.exports = router;
