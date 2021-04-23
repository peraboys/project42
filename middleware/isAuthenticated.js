//const popup = require('node-popup');
var JSAlert = require("js-alert");
//const popup = require('node-popup/dist/cjs.js');
module.exports=(req,res,next)=>{
    if(!req.session.isAuth){
     // import {alert} from 'node-popup';
  //popup.alert('aaa');
  JSAlert.alert('aaa');
      return res.render('login',{
      denied: true
    })
    next();
}
}