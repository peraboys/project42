const User=require('../../models/User');
module.exports = (req, res) => {
    var user=new User(
        {
            name:req.body.name,
            password:req.body.password,
            gender:req.body.gender,
            isAdmin:"no"
            
        }
    );
    
    user.save()
    return res.render('home',{
      message:"you are registered " + req.body.name
      })
    
    }
