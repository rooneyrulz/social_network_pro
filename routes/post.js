const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const files = require('../middleware/files');

const { postController } = require('../controllers');

const router = Router({ strict: true });

// GET ALL POSTS
router.get('/', isAuth, postController.getPosts);

// CREATE NEW POSTS
router.post('/create', isAuth, files, postController.createPost);

// GET POST BY ID
router.get('/:post_id', isAuth, postController.getPost);

// UPDATE EXISTING POST
router.put('/:post_id/update', isAuth, files, postController.updatePost);

// GET ALL THE POSTS BY OWNER
router.get('/user/post', isAuth, postController.getPostByUser);

// DELETE POSTS
router.delete('/:post_id/delete', isAuth, postController.deletePost);

module.exports = router;
