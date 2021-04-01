const users=[];
module.exports=class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    saveUser(){
        users.push(this);
    }
    static getAll(){
        return users;
    }

}