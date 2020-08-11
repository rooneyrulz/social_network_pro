const { Router } = require('express');

// MODELS
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Reply = require('../models/Reply');

// HELPERS
const { getPost, getCommentById } = require('../helpers');

const isAuth = require('../middleware/is-auth');

const router = Router({ strict: true });

// GET ALL REPLY
router.get('/:comment_id', isAuth, async (req, res, next) => {
  const { comment_id } = req.params;
  let replyList = [];
  try {
    const replies = await Reply.find({ comment: comment_id }).lean();
    for (const reply of replies) {
      reply.post = await getPost(reply.post);
      // reply.likes = await getCommentLikes(comment.post, comment._id);
      reply.comment = await getCommentById(reply.comment);
      replyList.push(reply);
    }
    return res.status(200).json(replyList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE  REPLIES
router.post('/:post_id/:comment_id/create', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;
  const { text } = req.body;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    const reply = await new Reply({
      text,
      post: post_id,
      comment: comment_id,
      owner: req.user,
    }).save();
    return res.status(201).json(reply);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// UPDATE EXISTING REPLY
router.put(
  '/:post_id/:comment_id/:reply_id/update',
  isAuth,
  async (req, res, next) => {
    const { post_id, comment_id, reply_id } = req.params;
    const { text } = req.body;

    try {
      const post = await Post.findById(post_id).lean();
      if (!post) return res.status(404).send('Post not found..');
      const comment = await Comment.findById(comment_id).lean();
      if (!comment) return res.status(404).send('Comment not found..');
      const reply = await Reply.findById(reply_id).lean();
      if (!reply) return res.status(404).send('Reply not found..');
      if (reply.comment.toString() !== comment_id.toString())
        return res.status(400).send('Reply does not exist on the comment..');
      if (reply.owner.toString() !== req.user._id.toString())
        return res.status(400).send('Permission deined..');
      const isUpdated = await Reply.findByIdAndUpdate(
        { _id: reply_id },
        { text, post: post_id, comment: comment_id, owner: req.user },
        { new: true }
      ).lean();
      return res.status(200).json(isUpdated);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

// DELETE EXISTING REPLY
router.delete(
  '/:comment_id/:reply_id/delete',
  isAuth,
  async (req, res, next) => {
    const { comment_id, reply_id } = req.params;

    try {
      const comment = await Comment.findById(comment_id).lean();
      if (!comment) return res.status(404).send('Comment not found..');
      const reply = await Reply.findById(reply_id).lean();
      if (!reply) return res.status(404).send('Reply not found..');
      if (reply.comment.toString() !== comment_id.toString())
        return res.status(400).send('Reply does not exist on the comment..');
      if (reply.owner.toString() !== req.user._id.toString())
        return res.status(400).send('Permission deined..');
      const isDeleted = await Reply.findByIdAndRemove(reply_id).lean();
      return res.status(200).json(isDeleted);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

module.exports = router;
