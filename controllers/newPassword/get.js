const User = require("../../models/User")

module.exports=(req,res)=>
{
var _usr;
    const token =req.params.token;

     User.findOne({
        resetToken:token,resetTokenExpiration:{
            $gt: Date.now()
        }
    }).then(user =>{
        _usr=user;
        const userId=_usr._id;
       return  res.render('newPassword',{

            message: 'New Password',
            userId: userId,
            passwordToken:token
        });
       // console.log(_usr._id);
    }).catch(err=>{
        console.log(err);
    });
}