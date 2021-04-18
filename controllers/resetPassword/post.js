
const sgMail = require('@sendgrid/mail')
const crypto=require('crypto');
const User = require('../../models/User');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports=(req,res)=>{
    var token=' ';
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err);
            return res.redirect('resetPassword');
        }
        token =buffer.toString('hex');
        console.log(token);
        User.findOne({email:req.body.email})
        .then(user =>{
            if(!user){
                return res.redirect('resetPassword');
            }
        
        user.resetToken=token;
        user.resetTokenExpiration=Date.now()+3600000;
  return user.save();
        }).then(result=>{
 res.redirect('/');
        })
    })
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'atalaykorkut@hotmail.com', // Change to your verified sender
        subject: 'Reset your password',
        text: 'Reset your password',
        html: `  
        <p> Follow this link to reset your password </p>
        <p>
      <a href="http://localhost:3000/resetPassword/${token}"
      >reset password </a>
      </p>

        `


      };
      sgMail
        .send(msg)
        .then(()=>{
            console.log('email sent')
            
        })
        .catch((err)=>{
            console.log(err)
        })
}
