const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
   unique: true,
  },
  subtitle: {
    type: String,
    required: false,
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  audio: {
    type: String,
    required: false,
    unique: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  currentPosition: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true,
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
