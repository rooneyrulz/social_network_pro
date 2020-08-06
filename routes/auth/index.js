const { Router } = require('express');
const { hash, compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const User = require('../../models/User');
const isAuth = require('../../middleware/is-auth');

const router = Router({ strict: true });

router.post('/register', async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const userObj = { username, email };
    const hashedPwd = await hash(password, 12);
    userObj.password = hashedPwd;
    const user = await new User(userObj).save();
    const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: 360000 });
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).lean();
    if (!user) return res.status(404).send('User not found..');
    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials..');
    const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: 360000 });
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get('/user', isAuth, async (req, res, next) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).lean();
    if (!user)
      return res.status(400).send('User not found, Authorization denied..');
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
