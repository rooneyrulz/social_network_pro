const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Like = require('../models/Like');
const Reply = require('../models/Reply');

exports.getPost = async (id) => {
  try {
    const post = await Post.findById(id).lean();
    return post;
  } catch (error) {
    console.log(error.message);
  }
};

exports.getComments = async (id) => {
  try {
    const comments = await Comment.find({ post: id }).lean();
    return comments;
  } catch (error) {
    console.log(error.message);
  }
};

exports.getPostLikes = async (id) => {
  try {
    const likes = await Like.find()
      .and([{ post: id }, { isPostLike: true }])
      .lean();
    return likes;
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCommentLikes = async (post_id, comment_id) => {
  try {
    const likes = await Like.find()
      .and([{ post: post_id }, { comment: comment_id }, { isPostLike: false }])
      .lean();
    return likes;
  } catch (error) {
    console.log(error.message);
  }
};

exports.getReplies = async (post_id, comment_id) => {
  try {
    const replies = await Reply.find()
      .and([{ post: post_id }, { comment: comment_id }])
      .lean();
    return replies;
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCommentById = async (id) => {
  try {
    const comment = await Comment.findById(id).lean();
    return comment;
  } catch (error) {
    console.log(error.message);
  }
};
