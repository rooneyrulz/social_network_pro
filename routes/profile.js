const { Router } = require('express');

const isAuth = require('../middleware/is-auth');
const files = require('../middleware/files');

const { profileController } = require('../controllers');

const router = Router({ strict: true });

// GET ALL PROFILES
router.get('/', isAuth, profileController.getProfiles);

// CREATE PROFILE
router.post('/create', isAuth, files, profileController.createProfile);

// GET USER PROFILE
router.get('/user/profile', isAuth, profileController.getUserProfile);

// GET PROFILE
router.get('/:profile_id', isAuth, profileController.getProfile);

// UPDATE EXISTING PROFILE
router.patch(
  '/:profile_id/update',
  isAuth,
  files,
  profileController.updateProfile
);

module.exports = router;
