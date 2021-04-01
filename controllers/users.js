
const User=require('../models/User');
module.exports.getUsers=(req,res)=>{
 return res.render('userList',{users:User.getAll()});
}
module.exports.addUser=(req,res)=>{
var user=new User(req.body.name,req.body.password);
user.saveUser();
return res.redirect('admin');
}