const { PlaylistRepository, SongRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const playlistRepository = new PlaylistRepository();

async function createPlaylist(data) {
  try {
    const isExisting = await playlistRepository.isExist(data);
    if(isExisting.length!==0) {
      throw new AppError("Please give a unique name to playlist", 400);
    }
    data = {'title': data.title.toLowerCase(), 'user': data.user}
    const result = await playlistRepository.create(data);
    return result;
  } catch (error) {
    if(error instanceof AppError) {
      throw error;
    }
    throw new AppError("Something went wrong while creating the playlist", 500);
  }
}

async function addSongstoPlayList(data) {
  try {
    const playlist = await playlistRepository.findPlaylistByIdAndUser(data.user, data.playlistId);
    const validSongIds = data.songs
      .map(id => (ObjectId.isValid(id) ? new ObjectId(id) : null))
      .filter(id => id !== null);
    const existingSongIds = playlist.songs.map(id => id.toString());
    const mergedIds = [...new Set([...existingSongIds, ...validSongIds.map(id => id.toString())])];
    playlist.songs = mergedIds.map(id => new ObjectId(id));
    
    await playlist.save();
    return playlist;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError("Something went wrong while adding songs to the playlist", 500);
  }
}

async function getPlaylist(data) {
  try {
    const result = await playlistRepository.getByUser(data);
    return result;
  } catch (error) {
    throw new AppError("Something went wrong while fetching playlist", 500);
  }
}




module.exports = { 
  createPlaylist,
  addSongstoPlayList,
  getPlaylist
};
