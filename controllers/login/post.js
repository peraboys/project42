const fs=require('fs');
const  UserMap=require('../../middleware/userMap');
var isim="";
module.exports = (req, res) => {
  const body=[];
  req.on('data',(chunk)=>{
    body.push(chunk);
  } );
  req.on('end',()=>{
    const parsed=Buffer.concat(body).toString();
    isim =parsed.split('=')[1].split('&')[0];
    //console.log(isim);
    if(UserMap.map.get(isim)!=undefined){

    
    fs.appendFileSync('log.txt',isim+' has logged in!\n');
    
    return res.render('login',{
      title: isim
      })
    }
    else{

    
     return res.redirect("login");
    }
  });



    //console.log(req.body.name);
    
  }
