const { Router } = require('express');

const Post = require('../models/Post');
const isAuth = require('../middleware/is-auth');

const router = Router({ strict: true });

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).lean();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/create', isAuth, async (req, res, next) => {
  const { text } = req.body;
  try {
    const post = await new Post({ text, owner: req.user }).save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

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

module.exports = router;
