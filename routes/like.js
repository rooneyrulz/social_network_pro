const { Router } = require('express');

const isAuth = require('../middleware/is-auth');

const Like = require('../models/Like');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const router = Router({ strict: true });

// GET ALL LIKES BY POST
router.get('/post/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  try {
    const likes = await Like.find({ post: post_id }).lean();
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE LIKES
router.get('/post/:post_id/create', isAuth, async (req, res, next) => {
  const { post_id } = req.params;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const isLiked = await Like.findOne()
      .and([{ post: post_id }, { owner: req.user }])
      .lean();
    if (isLiked) return res.status(400).send('Post has already been liked..');
    const like = await new Like({ post: post_id, owner: req.user }).save();
    return res.status(201).json(like);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// REMOVE LIKES
router.get('/post/:post_id/remove', isAuth, async (req, res, next) => {
  const { post_id } = req.params;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const isLiked = await Like.findOne()
      .and([{ post: post_id }, { owner: req.user }])
      .lean();
    if (!isLiked)
      return res.status(400).send('Post has not already been liked..');
    const isUnliked = await Like.findByIdAndRemove(isLiked._id);
    return res.status(201).json(isUnliked);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// GET ALL LIKES BY COMMENT
router.get('/comment/:comment_id', isAuth, async (req, res, next) => {
  const { comment_id } = req.params;
  try {
    const likes = await Like.find({ comment: comment_id }).lean();
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE LIKES ON COMMENTS
router.get('/comment/:comment_id/create', isAuth, async (req, res, next) => {
  const { comment_id } = req.params;

  try {
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    const isLiked = await Like.findOne()
      .and([{ comment: comment_id }, { owner: req.user }])
      .lean();
    if (isLiked)
      return res.status(400).send('Comment has already been liked..');
    const like = await new Like({
      comment: comment_id,
      owner: req.user,
    }).save();
    return res.status(201).json(like);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// REMOVE LIKES ON COMMENT
router.get('/comment/:comment_id/remove', isAuth, async (req, res, next) => {
  const { comment_id } = req.params;

  try {
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    const isLiked = await Like.findOne()
      .and([{ comment: comment_id }, { owner: req.user }])
      .lean();
    if (!isLiked)
      return res.status(400).send('Comment has not already been liked..');
    const isUnliked = await Like.findByIdAndRemove(isLiked._id);
    return res.status(201).json(isUnliked);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
