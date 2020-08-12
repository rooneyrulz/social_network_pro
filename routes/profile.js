const { Router } = require('express');

// MODELS
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Reply = require('../models/Reply');
const Like = require('../models/Like');

// MIDDLEWARES
const isAuth = require('../middleware/is-auth');
const files = require('../middleware/files');

const router = Router({ strict: true });

// GET ALL PROFILES
router.get('/', isAuth, async (req, res, next) => {
  try {
    const profiles = await Profile.find().lean();
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// CREATE PROFILE
router.post('/create', isAuth, files, async (req, res, next) => {
  const { displayName, profession, country } = req.body;
  try {
    const profile = await Profile.findOne({ owner: req.user }).lean();
    if (profile) return res.status(400).send('Profile already exist..');
    const newProfile = await new Profile({
      displayName,
      profession,
      country,
      owner: req.user,
      displayProfile: req.file,
    }).save();
    return res.status(201).json(newProfile);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET USER PROFILE
router.get('/user/profile', isAuth, async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ owner: req.user }).lean();
    if (!profile) return res.status(404).send('User profile not found..');
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET PROFILE
router.get('/:profile_id', isAuth, async (req, res, next) => {
  const { profile_id } = req.params;
  try {
    const profile = await Profile.findById(profile_id).lean();
    if (!profile) return res.status(404).send('Profile not found..');
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
