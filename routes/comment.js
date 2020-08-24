const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const { commentController } = require('../controllers');

const router = Router({ strict: true });

// GET ALL COMMENTS BY POSTS
router.get('/:post_id', isAuth, commentController.getCommentsByPost);

// CREATE NEW COMMENTS
router.post('/:post_id/create', isAuth, commentController.createComment);

// UPDATE EXISTING COMMENT
router.put(
  '/:post_id/:comment_id/update',
  isAuth,
  commentController.updateComment
);

// DELETE EXISTING COMMENT
router.delete(
  '/:post_id/:comment_id/delete',
  isAuth,
  commentController.deleteComment
);

module.exports = router;
