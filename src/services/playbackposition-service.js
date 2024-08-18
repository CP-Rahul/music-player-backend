const { PlaybackPositionRepository, SongRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const playbackPositionRepository = new PlaybackPositionRepository();

async function savePlaybackPosition(data) {
  try {
    const result = await playbackPositionRepository.savePlaybackPosition(data);
    return result;
  } catch (error) {
    throw new AppError("Something went wrong while saving the current position", 500);
  }
}

async function getsavedPlaybackPosition(data) {
  try {
    const result = await playbackPositionRepository.getSavedPositionByUserId(data);
    return result;
  } catch (error) {
    throw new AppError("Something went wrong while fetching the played song", 500);
  }
}

async function deleteSavedPosition(data) {
  try {
    const result = await playbackPositionRepository.deleteSavedPosition(data.userId, data.songId);
    return result;
  } catch (error) {
    throw new AppError("Something went wrong while deleting the paused song", 500);
  }
}



module.exports = {
  savePlaybackPosition,
  getsavedPlaybackPosition,
  deleteSavedPosition
};
