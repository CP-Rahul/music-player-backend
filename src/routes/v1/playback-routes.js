const express = require('express');

const { PlaybackPositionController } = require('../../controllers');
const { AuthMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        AuthMiddleware.checkAuth,
        PlaybackPositionController.savePlaybackPosition); 
router.get('/', 
        AuthMiddleware.checkAuth,
        PlaybackPositionController.getsavedPlaybackPosition); 
router.delete('/', 
        AuthMiddleware.checkAuth,
        PlaybackPositionController.deleteSavedPosition); 

module.exports = router;
