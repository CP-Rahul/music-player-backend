const express = require('express');

const { SongController } = require('../../controllers');
const { AuthMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        AuthMiddleware.checkAuth,
        SongController.createSong); 
router.get('/', 
        AuthMiddleware.checkAuth,
        SongController.getAllSongs); 

module.exports = router;
