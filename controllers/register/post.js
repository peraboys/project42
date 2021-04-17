const User=require('../../models/User');
const bcrypt=require('bcrypt');
const {isStrongPassword, default: validator}=require('validator');
const { validate } = require('../../models/User');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (req, res) => {
    User.findOne({name: req.body.name})
    .then(usr=>
        {
            if(usr){
                
                return res.redirect('/register');
                
            }
          if (!validator.isStrongPassword(req.body.password)){
            return res.redirect('/register');
          }

            return bcrypt.hash(req.body.password,10)
            .then(hashedPassword=>{
                const user=new User(
                    {
                        name:req.body.name,
                        password:hashedPassword,
                        gender:req.body.gender,
                        email:req.body.email
                        
                    }
                );
                return user.save();
            })
                .then(()=>
            {
                console.log(req.body.email);
                 res.redirect('/login');
                const msg = {
                    to: req.body.email, // Change to your recipient
                    from: 'atalaykorkut@hotmail.com', // Change to your verified sender
                    subject: 'Verify your email',
                    text: 'Please Verify your email'
                    
                    
                  }
                  sgMail
                    .send(msg)
                    .then(()=>{
                        console.log('email sent')
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    
               
                })
            
            .catch(err =>{
                console.log(err.message);
            })
        })
        

       
        
   
    
    
    
    
    }
