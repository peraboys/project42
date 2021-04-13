const User=require('../../models/User');
const bcrypt=require('bcrypt');
module.exports = (req, res) => {

  User.findOne({name:req.body.name})
  .then(user=>{
      
      if(user){
       bcrypt.compare(req.body.password,user.password)
       .then(isSuccess=>{
         if(isSuccess){
          req.session.user=user;
          req.session.isAuth=true;
          return req.session.save(function(err){
             if(err)
             {
              console.log(err);
             }
             
              res.redirect('home');
           });

           }
           res.redirect('login');
         })
         
     
       .catch(err=>{
         console.log(err);
       })
         // res.cookie('isAuth',true );
         
         
          
        
        
      }
      else{
        return res.redirect('login');
      }
      
       

      
      
  })


    
    
    }

    
     


  
