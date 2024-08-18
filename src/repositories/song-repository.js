const CrudRepository = require("./crud-repository");
const song  = require('../models/song');

class SongRepository extends CrudRepository{
    constructor(){
        super(song);
    }
}

module.exports = SongRepository;