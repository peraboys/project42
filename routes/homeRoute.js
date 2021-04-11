const express = require('express');
const router = express.Router();
const homeGetController = require('../controllers/home/get');
const homePostController = require('../controllers/home/post');
router.get(
    '/',
      homeGetController
  );
  
  module.exports = router;