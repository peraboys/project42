const express=require('express');
const router=express.Router();
const resetPasswordGetController=require('../controllers/resetPassword/get');
const resetPasswordPostController=require('../controllers/resetPassword/post');
router.get('/',resetPasswordGetController);
router.post('/',resetPasswordPostController);
module.exports=router;