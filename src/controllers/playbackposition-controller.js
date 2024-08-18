const { PlaybackPositionService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function savePlaybackPosition(req, res) {
  try {
    const user = await PlaybackPositionService.savePlaybackPosition({
        userId: req.user,
        songId: req.body.songId,
        position: req.body.position
    });
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getsavedPlaybackPosition(req, res) {
  try {
    const user = await PlaybackPositionService.getsavedPlaybackPosition({
        userId: req.user,
    });
    SuccessResponse.data = user;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function deleteSavedPosition(req, res) {
  try {
    const user = await PlaybackPositionService.deleteSavedPosition({
        userId: req.user,
        songId: req.body.songId
    });
    SuccessResponse.data = user;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  savePlaybackPosition,
  getsavedPlaybackPosition,
  deleteSavedPosition
};
