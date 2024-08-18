const CrudRepository = require("./crud-repository");
const playlist  = require('../models/playlist');
const AppError = require("../utils/error/app-error");
const mongoose = require('mongoose');

class PlaylistRepository extends CrudRepository{
    constructor(){
        super(playlist);
    }

    async findPlaylistByIdAndUser(user, _id) {
        _id = new mongoose.Types.ObjectId(_id);
        try {
            const res = await playlist.findOne({user, _id});
            if(!res) {
                throw new AppError('Can\'t find the playlist', 400);
            }
            return res;
        } catch (error) {
            throw error;
        }
    }

    async getByUser(user) {
        try {
            const playlists = await playlist.find(user).populate('songs');
            return playlists;
        } catch (error) {
            throw error;
        }
    }

    async isExist(data) {
       try {
        data = {'title': data.title.toLowerCase(), 'user': data.user}
        const exist = await playlist.find(data);
        return exist;
       } catch (error) {
        throw error;
       }
    }
}

module.exports = PlaylistRepository;