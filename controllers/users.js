
const  deleteUser = require('../models/User');
const User=require('../models/User');
module.exports.getUsers=(req,res,next)=>{
   User.findAll()
   .then(users=>{

   

 return res.render('userList',{
    action:req.query.action,
    users:users});
})
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
user.saveUser()
.then(result=>{
    res.redirect('admin');
})
.catch(err=>{
    console.log(err);
})

}
module.exports.getEditUser=(req,res)=>{
    User.findById(req.params.userid)
.then(users=>{
    
    console.log(users[0]);
    return res.render('editUser',{user:users[0]});
})



}
module.exports.postEditUser=(req,res)=>{
   User.findById(req.body.id)
    .then(users=>{
        
        var user=users[0];
        
       // console.log(user);
    user.name=req.body.name;
    user.password=req.body.password;
    user.gender=req.body.gender;
    user.isAdmin=req.body.isAdmin;
    user.saveUser();
    return res.redirect('/admin/userlist?action=edit');
})
}
module.exports.deleteUser=(req,res)=>{
    
    User.deleteById(req.params.userid);
    return res.redirect('/admin/userlist?action=delete');
    

}