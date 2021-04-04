
const { deleteUser } = require('../models/User');
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
module.exports.getEditUser=(req,res)=>{
var user=User.findById(req.params.userid);
console.log(user.name);
return res.render('editUser',{user:user});
}
module.exports.postEditUser=(req,res)=>{
    var user=User.findById(req.body.id);
    user.name=req.body.name;
    user.password=req.body.password;
    user.gender=req.body.gender;
    user.isAdmin=req.body.isAdmin;
    return res.redirect('userlist');
}
module.exports.deleteUser=(req,res)=>{
    
    User.deleteById(req.params.userid);
    return res.redirect('/admin/userlist');
    
}