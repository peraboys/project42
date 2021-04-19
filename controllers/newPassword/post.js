const User = require("../../models/User");
const bcrypt=require('bcrypt');
module.exports=(req,res,next)=>{
    const newPassword =req.body.newPassword;
    const passwordToken =req.body.passwordToken;
    const userId =req.body.userId;
    let _user;
    User.findOne({
        resetToken: passwordToken,resetTokenExpiration:{
            $gt: Date.now()
        },
        _id:userId
    }).then(user =>{

        _user=user;
        return bcrypt.hash(newPassword,10)
        }).then(hashedPassword=>{
    _user.password=hashedPassword;
    _user.resetToken=undefined;
    _user.resetTokenExpiration=undefined;
    return _user.save();

        }).then(()=>{
            res.redirect('/login');
        }).catch(err=>{
            console.log(err);
        });
    }

