const express = require('express');

const userRoutes = require('./user-routes');
const songRoutes = require('./song-routes');
const playbackRoutes = require('./playback-routes');
const playlistRoutes= require('./playlist-routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/song', songRoutes);
router.use('/playback', playbackRoutes);
router.use('/playlist', playlistRoutes);

module.exports = router;
