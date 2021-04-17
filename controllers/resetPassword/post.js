
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports=(req,res)=>{
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'atalaykorkut@hotmail.com', // Change to your verified sender
        subject: 'Reset your password',
        text: 'Reset your password'


      }
      sgMail
        .send(msg)
        .then(()=>{
            console.log('email sent')
            console.log(process.env.SENDGRID_API_KEY);
        })
        .catch((err)=>{
            console.log(err)
        })
}
