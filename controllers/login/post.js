const User=require('../../models/User');
module.exports = (req, res) => {

  User.findOne({name:req.body.name})
  .then(user=>{
      
      if(user){
        if(user.password===req.body.password){
         // res.cookie('isAuth',true );
         req.session.isAuth=true;
          return res.redirect('home');
          
        }
        return res.redirect('login');
      }
      return res.redirect('login');
      
  })
  

    
    
    }

    
     


  
