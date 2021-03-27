
var isim="";
module.exports = (req, res) => {
  const body=[];
  req.on('data',(chunk)=>{
    body.push(chunk);
  } );
  req.on('end',()=>{
    const parsed=Buffer.concat(body).toString();
    isim =parsed.split('=')[1].split('&')[0];
    console.log(isim);
    return res.render('login',{
      title: isim
      })
  });
    //console.log(req.body.name);
    
  }
