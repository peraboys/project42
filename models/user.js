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
        users.push(this);
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
}