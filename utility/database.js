const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://sinan:sinanpera@cluster0.hjeq5.mongodb.net/test')
    .then(client => {
        _db=client.db();
        console.log("connected");
        callback(client);
        }).catch(err=>{
            console.log(err);
            throw err;
        })
}
const getdb=()=>{
    if(_db){
        return _db;
    }
    throw 'no database';
}
module.exports=mongoConnect;
module.exports.getDb=getdb;

