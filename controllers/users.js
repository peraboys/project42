
const  deleteUser = require('../models/User');
const User=require('../models/User');
module.exports.getUsers=(req,res,next)=>{
   User.find()
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
var user=new User(
    {
        name:req.body.name,
        password:req.body.password,
        gender:req.body.gender,
        isAdmin:isAdminVal
    }
);

user.save()
.then(()=>{
    console.log("hello");
    res.redirect('admin');
})
.catch(err=>{
    console.log(err);
})

}
module.exports.getEditUser=(req,res)=>{
    User.findOne({_id:req.params.userid})
.then(user=>{
    
    console.log(user);
    console.log("sinan");
    return res.render('editUser',{user:user});
})



}
module.exports.postEditUser=(req,res)=>{
  
        
       // console.log(user);
    const name=req.body.name;
    const password=req.body.password;
     const gender=req.body.gender;
     var isAdminVal;
     if(req.body.isAdmin){
        isAdminVal="yes";
       }
       else{
        isAdminVal="no";
       }
    const id=req.body.id;

    User.update({_id:id},{$set:{
        name:name,
        password:password,
        gender:gender,
        isAdmin:isAdminVal
    }})
    .then(()=>{
         res.redirect('/admin/userlist?action=edit');
    })
    .catch(err=>{
        console.log(err);
    })
}
   

module.exports.deleteUser=(req,res)=>{
    User.findByIdAndDelete(req.params.userid)
    .then(()=>{
     res.redirect('/admin/userlist?action=delete');
    })
    .catch(err=>{
    console.log(err);
    })
    
    

}