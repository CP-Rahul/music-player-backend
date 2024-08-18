const CrudRepository = require("./crud-repository");
const playbackPosition  = require('../models/playbackposition');

class SongRepository extends CrudRepository{
    constructor(){
        super(playbackPosition );
    }

    async savePlaybackPosition({userId, songId, position}) {
        try {
            const res = await playbackPosition.findOneAndUpdate(
                  { userId, songId },
                  { position },
                  { upsert: true, new: true }
            );
            return res; 
        } catch (error) {
            throw error;
        }
    }
    
    async getSavedPositionByUserId(userId) {
        try {
            const res = await playbackPosition.find(userId);
            return res; 
        } catch (error) {
            throw error;
        }
    }

    async deleteSavedPosition(userId, songId) {
        try {
            const res = await playbackPosition.deleteOne({userId, songId});
            return res; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SongRepository;