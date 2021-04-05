const getDb=require('../utility/database').getDb;
const mongodb=require('mongodb');
var users=[];
module.exports=class User{
    constructor(name,password,gender,isAdmin,id){
        this.id=Math.floor(Math.random()*99999)+1;
        this._id=new mongodb.ObjectID(id);
        this.name=name;
        this.password=password;
        this.gender=gender;
        this.isAdmin=isAdmin;
    }
    saveUser(){
       let db=getDb();

       if(this._id){
        db.collection('users')
        .updateOne({ _id:this._id}, { $set: this});

       }else{

db.collection('users')
       .insertOne(this)
       }

      return db
       .then(result => {
           console.log(result);
       })
       .catch(err=>{
           console.log(err);
       })
    }
    static getAll(){
        return users;
    }
    static findById(id){
       const user=users.find(i=>i.id==id);
       console.log(user);
       return user;
       
    }

    static deleteById(id){
    const index=users.findIndex(i=>i.id===id)
     users.splice(index,1);
     
    }
    static findAll(){
        const db=getDb();
         return db.collection('users')
        .find({})
        .toArray()
        .then(users=>{
            return users;
        } )
        .catch(err=>{
            console.log(err);
        })
    }

    static findById(userid){
        const db= getDb();
        return db.collection('users')
        .find({_id : mongodb.ObjectID(userid)})
        .toArray()
        .then(users=>{
            return users
        })
        .catch(err=>{
            console.log(err)});
    }
}