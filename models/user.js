const getDb=require('../utility/database').getDb;
var users=[];
module.exports=class User{
    constructor(name,password,gender,isAdmin){
        this.id=Math.floor(Math.random()*99999)+1;
        this.name=name;
        this.password=password;
        this.gender=gender;
        this.isAdmin=isAdmin;
    }
    saveUser(){
       const db=getDb();
       db.collection('users')
       .insertOne(this)
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
         db.collection('users')
        .find({})
        .toArray()
        .then(users=>{
            return users;
        } )
        .catch(err=>{
            console.log(err);
        })
    }
}