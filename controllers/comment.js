const { Post, Comment, Like, Reply } = require('../models');
const { getPost, getCommentLikes, getReplies } = require('../helpers');

exports.getCommentsByPost = async (req, res, next) => {
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
};

exports.createComment = async (req, res, next) => {
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
};

exports.updateComment = async (req, res, next) => {
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
};

exports.deleteComment = async (req, res, next) => {
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
    const replyLike = await Like.find()
      .and([{ post: post_id }, { comment: comment_id }, { kind: 'reply' }])
      .lean();
    replyLike.length &&
      (await Like.deleteMany()
        .and([{ post: post_id }, { comment: comment_id }, { kind: 'reply' }])
        .lean());
    const replies = await Reply.find()
      .and([{ post: post_id }, { comment: comment_id }])
      .lean();
    replies.length &&
      (await Reply.deleteMany().and([
        { post: post_id },
        { comment: comment_id },
      ]));
    const likes = await Like.find()
      .and([{ comment: comment_id }, { kind: 'comment' }])
      .lean();
    likes.length && (await Like.deleteMany({ comment: comment_id }).lean());
    const isDeleted = await Comment.findByIdAndRemove(comment_id).lean();
    return res.status(200).json(isDeleted);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
