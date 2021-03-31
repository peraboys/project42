const fs=require('fs');
const  UserMap=require('../../middleware/userMap');
var isim="";
var sifre="";
module.exports = (req, res) => {
  const body=[];
  req.on('data',(chunk)=>{
    body.push(chunk);
  } );
  req.on('end',()=>{
    const parsed=Buffer.concat(body).toString();
    isim =parsed.split('=')[1].split('&')[0];
    sifre=parsed.split('=')[2];
   UserMap.map.set(isim,sifre);
    //console.log(isim);
    fs.appendFileSync('log.txt',isim+' is registered!\n');
    return res.render('admin',{
      
      })
  });
    //console.log(req.body.name);
    
  }
