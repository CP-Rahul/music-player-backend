const express = require('express');

const { UserController } = require('../../controllers');

const router = express.Router();

router.post('/register', 
        UserController.register); 
router.post('/login', 
        UserController.login); 
router.post('/isAuthenticated', 
        UserController.isAuthenticated); 

module.exports = router;
