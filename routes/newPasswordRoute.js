const express=require('express');
const router=express.Router();
const newPasswordGetController=require('../controllers/newPassword/get');
const newPasswordPostController=require('../controllers/newPassword/post');
router.get('/:token',newPasswordGetController);
router.post('/',newPasswordPostController);
module.exports=router;