
const User=require('../models/User');
module.exports.getUsers=(req,res)=>{
 return res.render('userList',{users:User.getAll()});
}
module.exports.addUser=(req,res)=>{
var isAdminVal;
if(req.body.isAdmin){
 isAdminVal="yes";
}
else{
 isAdminVal="no";
}
var user=new User(req.body.name,req.body.password,req.body.gender,isAdminVal);
user.saveUser();
return res.redirect('admin');
}
module.exports.editUser=(req,res)=>{
var user=User.findById(req.params.userid);
console.log(user.name);
return res.render('editUser',{user:user});
}