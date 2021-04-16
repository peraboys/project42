const mongoose=require('mongoose');
const {isStrongPassword,isEmail}=require('validator');
const UserSchema=mongoose.Schema({
name:{type:String,
    required:[true,'the name field cannot be empty']
},
email:{type:String,
    validate:[isEmail,'not an email']
 },
password:{
    type:String,
   // required:[true,'the password field cannot be empty'],
    validate:[isStrongPassword,'not a strong password']
},
gender:String,
isAdmin:{ type:Boolean,
    default:false
}})
const User=mongoose.model('User',UserSchema);
module.exports=User;