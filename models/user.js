const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
name:{type:String,
    required:true
},
password:{
    type:String,
    required:true
},
gender:String,
isAdmin:String
})
const User=mongoose.model('User',UserSchema);
module.exports=User;