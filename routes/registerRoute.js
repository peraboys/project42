const express = require('express');
const router = express.Router();
const registerGetController = require('../controllers/register/get');
const registerPostController = require('../controllers/register/post');
router.get(
    '/',
      registerGetController
  );
  router.post(
    '/',
     registerPostController
  );
  module.exports = router;