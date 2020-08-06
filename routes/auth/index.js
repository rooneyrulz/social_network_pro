const { Router } = require('express');

const router = Router({ strict: true });

router.post('/register', (req, res, next) => res.send('Register..'));

router.post('/login', (req, res, next) => res.send('Login..'));

router.get('/user', (req, res, next) => res.send('Get auth user..'));

module.exports = router;
