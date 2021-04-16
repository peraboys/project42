
const sgMail = require('@sendgrid/mail')
//sgMail.setApiKey("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");
module.exports=(req,res)=>{
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'sinanergezer@gmail.com', // Change to your verified sender
        subject: 'Reset youtr password',
        text: 'Reset your password'
        
        
      }
      sgMail
        .send(msg)
        .then(()=>{
            console.log('email sent')
        })
        .catch((err)=>{
            console.log(err)
        })
}