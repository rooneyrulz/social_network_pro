const { Profile } = require('../models');

exports.getProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find().lean();
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createProfile = async (req, res, next) => {
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
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ owner: req.user }).lean();
    if (!profile) return res.status(404).send('User profile not found..');
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getProfile = async (req, res, next) => {
  const { profile_id } = req.params;
  try {
    const profile = await Profile.findById(profile_id).lean();
    if (!profile) return res.status(404).send('Profile not found..');
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  const { profile_id } = req.params;
  try {
    const profile = await Profile.findOne()
      .and([{ _id: profile_id }, { owner: req.user }])
      .lean();
    if (!profile) return res.status(400).send('Profile not found..');
    if (profile.owner.toString() !== req.user._id.toString())
      return res.status(400).send('Permission denied..');
    const newProfile = await Profile.findByIdAndUpdate(
      { _id: profile_id },
      req.file
        ? {
            ...req.body,
            owner: req.user,
            displayProfile: req.file,
          }
        : {
            ...req.body,
            owner: req.user,
          },
      { new: true }
    );
    return res.status(200).json(newProfile);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error);
  }
};
