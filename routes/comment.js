const { Router } = require('express');

// MODELS
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Like = require('../models/Like');
const Reply = require('../models/Reply');

// HELPERS
const { getPost, getCommentLikes, getReplies } = require('../helpers');

const isAuth = require('../middleware/is-auth');

const router = Router({ strict: true });

// GET ALL COMMENTS BY POSTS
router.get('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  let commentList = [];
  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const comments = await Comment.find({ post: post_id }).lean();
    for (const comment of comments) {
      comment.post = await getPost(comment.post);
      comment.likes = await getCommentLikes(comment.post, comment._id);
      comment.replies = await getReplies(comment.post, comment._id);
      commentList.push(comment);
    }
    return res.status(200).json(commentList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE NEW COMMENTS
router.post('/:post_id/create', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  const { text } = req.body;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const comment = await new Comment({
      text,
      post: post_id,
      owner: req.user,
    }).save();
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// UPDATE EXISTING COMMENT
router.put('/:post_id/:comment_id/update', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;
  const { text } = req.body;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    if (comment.post.toString() !== post_id.toString())
      return res.status(400).send('Comment does not exist on the post..');
    if (comment.owner.toString() !== req.user._id.toString())
      return res.status(400).send('Permission deined..');
    const isUpdated = await Comment.findByIdAndUpdate(
      { _id: comment_id },
      { text, post: post_id, owner: req.user },
      { new: true }
    ).lean();
    return res.status(200).json(isUpdated);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// DELETE EXISTING COMMENT
router.delete(
  '/:post_id/:comment_id/delete',
  isAuth,
  async (req, res, next) => {
    const { post_id, comment_id } = req.params;

    try {
      const post = await Post.findById(post_id).lean();
      if (!post) return res.status(404).send('Post not found..');
      const comment = await Comment.findById(comment_id).lean();
      if (!comment) return res.status(404).send('Comment not found..');
      if (comment.post.toString() !== post_id.toString())
        return res.status(400).send('Comment does not exist on the post..');
      if (
        comment.owner.toString() !== req.user._id.toString() &&
        post.owner.toString() !== req.user._id.toString()
      )
        return res.status(400).send('Permission deined..');
      const replies = await Reply.find()
        .and([{ post: post_id }, { comment: comment_id }])
        .lean();
      replies.length &&
        (await Reply.deleteMany().and([
          { post: post_id },
          { comment: comment_id },
        ]));
      const likes = await Like.find({ comment: comment_id }).lean();
      likes.length && (await Like.deleteMany({ comment: comment_id }).lean());
      const isDeleted = await Comment.findByIdAndRemove(comment_id).lean();
      return res.status(200).json(isDeleted);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

module.exports = router;
