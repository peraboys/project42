const express = require('express');
const router = express.Router();
const homeGetController = require('../controllers/home/get');
const homePostController = require('../controllers/home/post');
const isAuth=require('../middleware/isAuthenticated');
router.get(
    '/',
    isAuth,
      homeGetController
  );
  
  module.exports = router;