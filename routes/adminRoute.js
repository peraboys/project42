const express = require('express');
const router = express.Router();
const adminGetController = require('../controllers/admin/get');
const usersController=require('../controllers/users');
router.get(
    '/',
      adminGetController
  );
  router.post(
    '/',
     usersController.addUser);
  
  router.get(
    '/userlist',
     usersController.getUsers);
  router.get(
    '/edituser/:userid',
    usersController.editUser
  );
  module.exports = router;