const { Post, Like, Comment } = require('../models');
const { getPost, getCommentById } = require('../helpers');

exports.getLikesByPost = async (req, res, next) => {
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
};

exports.createLike = async (req, res, next) => {
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
};

exports.removeLike = async (req, res, next) => {
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
};

exports.getLikesByComment = async (req, res, next) => {
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
};

exports.createLikeOnComment = async (req, res, next) => {
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
};

exports.removeLikeOnComment = async (req, res, next) => {
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
};
