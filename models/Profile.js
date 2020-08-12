const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  displayProfile: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
