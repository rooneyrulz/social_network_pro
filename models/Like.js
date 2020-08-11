const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isPostLike: {
    type: Boolean,
    enum: [true, false],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Like', likeSchema);
