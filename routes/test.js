const { Router } = require('express');

const router = Router({ strict: true });

// Testing Route
router.get('/', (req, res, next) => res.send('Testing route..'));

module.exports = router;
