const User=require('../../models/User');
const bcrypt=require('bcrypt');
module.exports = (req, res) => {
    User.findOne({name: req.body.name})
    .then(usr=>
        {
            if(usr){
                return res.redirect('/register');
            }
            return bcrypt.hash(req.body.password,10);
        })
        .catch(err=>{
            console.log(err);
        })
        .then(hashedPassword=>{
            const user=new User(
                {
                    name:req.body.name,
                    password:hashedPassword,
                    gender:req.body.gender,
                    
                }
            );
            return user.save()
        })
        .catch(err=>{
            console.log(err);
        })
        .then(()=>
        {
           return  res.redirect('/login');
        })

   
    
    
    
    
    }
