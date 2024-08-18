const express = require('express');

const { PlaylistController } = require('../../controllers');
const { AuthMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        AuthMiddleware.checkAuth,
        PlaylistController.createPlaylist); 
router.post('/addsongs', 
        AuthMiddleware.checkAuth,
        PlaylistController.addSongstoPlayList); 
router.get('/', 
            AuthMiddleware.checkAuth,
            PlaylistController.getPlayList); 


module.exports = router;
