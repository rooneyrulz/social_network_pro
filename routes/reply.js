const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const { replyController } = require('../controllers');

const router = Router({ strict: true });

// GET ALL REPLY
router.get('/:comment_id', isAuth, replyController.getRepliesByComment);

// CREATE  REPLIES
router.post(
  '/:post_id/:comment_id/create',
  isAuth,
  replyController.createReply
);

// UPDATE EXISTING REPLY
router.put(
  '/:post_id/:comment_id/:reply_id/update',
  isAuth,
  replyController.updateReply
);

// DELETE EXISTING REPLY
router.delete(
  '/:comment_id/:reply_id/delete',
  isAuth,
  replyController.deleteReply
);

module.exports = router;
