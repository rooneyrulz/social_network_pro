const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const { likeController } = require('../controllers');

const router = Router({ strict: true });

// GET ALL LIKES BY POST
router.get('/:post_id', isAuth, likeController.getLikesByPost);

// CREATE LIKES
router.get('/:post_id/create', isAuth, likeController.createLike);

// REMOVE LIKES
router.get('/:post_id/remove', isAuth, likeController.removeLike);

// GET ALL LIKES BY COMMENT
router.get('/:post_id/:comment_id', isAuth, likeController.getLikesByComment);

// CREATE LIKES ON COMMENTS
router.get(
  '/:post_id/:comment_id/create',
  isAuth,
  likeController.createLikeOnComment
);

// REMOVE LIKES ON COMMENT
router.get(
  '/:post_id/:comment_id/remove',
  isAuth,
  likeController.removeLikeOnComment
);

// GET ALL LIKES BY REPLY
router.get(
  '/:post_id/:comment_id/:reply_id',
  isAuth,
  likeController.getLikesByReply
);

// CREATE LIKES ON REPLY
router.get(
  '/:post_id/:comment_id/:reply_id/create',
  isAuth,
  likeController.createLikeOnReply
);

// REMOVE LIKES ON REPLY
router.get(
  '/:post_id/:comment_id/:reply_id/remove',
  isAuth,
  likeController.removeLikeOnReply
);

module.exports = router;
