const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const Like = require('../models/Like');

const router = Router({ strict: true });

// GET ALL LIKES BY POST
router.get('/:post_id', isAuth, async (req, res, next) => {
  const { post_id } = req.params;
  try {
    const likes = await Like.find({ post: post_id }).lean();
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
