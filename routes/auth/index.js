const { Router } = require('express');
const { sign } = require('jsonwebtoken');

const User = require('../../models/User');

const router = Router({ strict: true });

router.post('/register', async (req, res, next) => {
  try {
    const user = await new User(req.body).save();
    const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: 360000 });
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res, next) => {
  //   const { username, password } = req.body;
  //   try {
  //     const user = await User.findOne({ username }).lean();
  //     if (!user) return res.status(404).send('User not found..')
  //     const isMatch = await compare(password, user.password)
  //     const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: 360000 });
  //     return res.status(201).json({ token, user });
  //   } catch (error) {
  //     return res.status(500).send(error.message);
  //   }
});

router.get('/user', (req, res, next) => res.send('Get auth user..'));

module.exports = router;
