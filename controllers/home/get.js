const cookieParser=require('cookie-parser');

module.exports = (req, res) => {
  
    return res.render('home',{
      user:req.session.user
      })
    
    }  