const User = require("../../models/User")

module.exports=(req,res)=>
{

    const token =req.params.token;

    User.findOne({
        resetToken:token,resetTokenExpiration:{
            $gt: Date.now()
        }
    }).then(user =>{
        
        res.render('newPassword',{

            message: 'New Password',
            userId: user._id.toString(),
            passwordToken:token
        });
        console.log(userId);
        console.log(passwordToken);
        //undefined
    }).catch(err=>{
        console.log(err);
    });
}