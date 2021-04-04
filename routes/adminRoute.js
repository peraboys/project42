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
    usersController.getEditUser
  );
  router.post(
    '/edituser',
    usersController.postEditUser
  )
  router.get(
  '/deleteuser/:userid',
  usersController.deleteUser
  );
  module.exports = router;