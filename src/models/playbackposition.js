const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaybackPositionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  songId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Song' 
  },
  position: {
    type: Number,
    required: true, 
  }
}, {
  timestamps: true
});

const PlaybackPosition = mongoose.model('PlaybackPosition', PlaybackPositionSchema);

module.exports = PlaybackPosition;
