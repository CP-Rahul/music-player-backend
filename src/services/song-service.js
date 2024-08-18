const { SongRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const Song = require('../models/song')


const songRepository = new SongRepository();

async function createSong(data) {
  try {
    const song = await Song.insertMany(data);
    return song;
  } catch (error) {
    console.log(error)
    throw new AppError("Something went wrong while saving songs", 500);
  }
}

async function getAllSongs() {
  try {
    const song = await songRepository.getAll();
    return song;
  } catch (error) {
    throw new AppError("Something went wrong while fetching all songs", 500);
  }
}



module.exports = {
    createSong,
    getAllSongs
};
