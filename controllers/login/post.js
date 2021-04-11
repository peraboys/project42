const User=require('../../models/User');
module.exports = (req, res) => {

  User.findOne({name:req.body.name})
  .then(user=>{
      
      if(user){
        if(user.password===req.body.password){
          return res.redirect('home');
        }
        return res.redirect('login');
      }
      return res.redirect('login');
      
  })
  

    
    
    }

    
     


  
