const cookieParser=require('cookie-parser');

module.exports = (req, res) => {
  console.log(req.session.isAuth);
    return res.render('home',{
       message:"welcome " 
      })
    
    }