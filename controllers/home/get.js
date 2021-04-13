const cookieParser=require('cookie-parser');

module.exports = (req, res) => {
  
    return res.render('home',{
       message:"welcome " 
      })
    
    }