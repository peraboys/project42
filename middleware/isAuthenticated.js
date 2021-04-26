//const popup = require('node-popup');
//var JSAlert = require("js-alert");
//const popup = require('node-popup/dist/cjs.js');
module.exports=(req,res,next)=>{
    if(!req.session.isAuth){
      return res.render('login',{
      denied: true
    })
  
}
next();
}