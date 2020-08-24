const { Router } = require('express');

const isAuth = require('../../middleware/is-auth');
const { authController } = require('../../controllers');

const router = Router({ strict: true });

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/user', isAuth, authController.authUser);

module.exports = router;
