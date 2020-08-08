const { Router } = require('express');

const Post = require('../models/Post');
const Comment = require('../models/Comment');
const isAuth = require('../middleware/is-auth');

const router = Router({ strict: true });

// GET ALL POSTS
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).lean();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// CREATE NEW POSTS
router.post('/create', isAuth, async (req, res, next) => {
  const { text } = req.body;
  try {
    const post = await new Post({ text, owner: req.user }).save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// GET POST BY ID
router.get('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// UPDATE EXISTING POST
router.put('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  const { text } = req.body;
  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    if (post.owner.toString() !== req.user._id.toString())
      return res.status(400).send('Permission denied..');
    const isUpdated = await Post.findByIdAndUpdate(
      { _id: post_id },
      { text, owner: req.user },
      { new: true }
    );
    return res.status(200).json(isUpdated);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// GET ALL THE POSTS BY OWNER
router.get('/user/post', isAuth, async (req, res, next) => {
  const { _id } = req.user;
  try {
    const post = await (await Post.find({ owner: _id })).lean();
    if (!post) return res.status(404).send('User has no posts yet..');
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// DELETE POSTS
router.delete('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  const { _id } = req.user;
  try {
    const post = await Post.findById(post_id).lean();
    if (!post) return res.status(404).send('Post not found..');
    if (post.owner.toString() !== _id.toString())
      return res.status(400).send('Permission denied..');
    const comments = await Comment.find({ post: post_id }).lean();
    comments.length && Comment.deleteMany({ post: post_id });
    const isDeleted = await Post.findByIdAndRemove(post_id);
    return res.status(200).json(isDeleted);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
