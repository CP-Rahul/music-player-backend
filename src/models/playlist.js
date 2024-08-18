const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaylistSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Song' 
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
}, { timestamps: true }); 

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;
