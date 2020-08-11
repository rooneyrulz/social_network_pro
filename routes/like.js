const { Router } = require('express');

// MODELS
const Like = require('../models/Like');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// HELPERS
const { getPost, getCommentById } = require('../helpers');

const isAuth = require('../middleware/is-auth');

const router = Router({ strict: true });

// GET ALL LIKES BY POST
router.get('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  let likeList = [];
  try {
    const likes = await Like.find()
      .and([{ post: post_id }, { isPostLike: true }])
      .lean();
    for (const like of likes) {
      like.post = await getPost(like.post);
      likeList.push(like);
    }
    return res.status(200).json(likeList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE LIKES
router.get('/:post_id/create', isAuth, async (req, res, next) => {
  const { post_id } = req.params;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const isLiked = await Like.findOne()
      .and([{ post: post_id }, { owner: req.user }, { isPostLike: true }])
      .lean();
    if (isLiked) return res.status(400).send('Post has already been liked..');
    const like = await new Like({
      post: post_id,
      owner: req.user,
      isPostLike: true,
    }).save();
    return res.status(201).json(like);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// REMOVE LIKES
router.get('/:post_id/remove', isAuth, async (req, res, next) => {
  const { post_id } = req.params;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const isLiked = await Like.findOne()
      .and([{ post: post_id }, { owner: req.user }, { isPostLike: true }])
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
router.get('/:post_id/:comment_id', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;
  let likeList = [];
  try {
    const likes = await Like.find()
      .and([{ post: post_id }, { comment: comment_id }, { isPostLike: false }])
      .lean();
    for (const like of likes) {
      like.post = await getPost(like.post);
      like.comment = await getCommentById(like.comment);
      likeList.push(like);
    }
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE LIKES ON COMMENTS
router.get('/:post_id/:comment_id/create', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;

  try {
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    const isLiked = await Like.findOne()
      .and([
        { post: post_id },
        { comment: comment_id },
        { owner: req.user },
        { isPostLike: false },
      ])
      .lean();
    if (isLiked)
      return res.status(400).send('Comment has already been liked..');
    const like = await new Like({
      post: post_id,
      comment: comment_id,
      owner: req.user,
      isPostLike: false,
    }).save();
    return res.status(201).json(like);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// REMOVE LIKES ON COMMENT
router.get('/:post_id/:comment_id/remove', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;

  try {
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    const isLiked = await Like.findOne()
      .and([
        { post: post_id },
        { comment: comment_id },
        { owner: req.user },
        { isPostLike: false },
      ])
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
