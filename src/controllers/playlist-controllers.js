const { PlaylistService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createPlaylist(req, res) {
  try {
    const playlist = await PlaylistService.createPlaylist({
        user: req.user,
        title: req.body.title,
        songs: req.body.songs,
    });
    SuccessResponse.data = playlist;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addSongstoPlayList(req, res) {
    try {
      const playlist = await PlaylistService.addSongstoPlayList({
          user: req.user,
          playlistId: req.body.playlistId,
          songs: req.body.songs,
      });
      SuccessResponse.data = playlist;
      return res.status(200).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

  async function getPlayList(req, res) {
    try {
      const playlist = await PlaylistService.getPlaylist({
          user: req.user,
      });
      SuccessResponse.data = playlist;
      return res.status(200).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

module.exports = {
    createPlaylist,
    addSongstoPlayList,
    getPlayList
}