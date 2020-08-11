const mongoose = require('mongoose');

const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Like = require('../models/Like');
const Reply = require('../models/Reply');

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
