const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const router = Router({ strict: true });

// GET ALL COMMENTS BY POSTS
router.get('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;

  try {
    const comments = await Comment.find({ post: post_id }).lean();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE NEW COMMENTS
router.post('/:post_id', isAuth, async (req, res, next) => {
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
router.put('/:post_id/update/:comment_id', isAuth, async (req, res, next) => {
  const { post_id, comment_id } = req.params;
  const { text } = req.params;

  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    const comment = await Comment.findById(comment_id).lean();
    if (!comment) return res.status(404).send('Comment not found..');
    if (comment.post !== post_id)
      return res.status(400).send('Comment does not exist on the post..');
    if (comment.owner !== req.user._id)
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

module.exports = router;
