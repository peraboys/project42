const body=[];
var isim="";
module.exports = (req, res) => {
  req.on('data',(chunk)=>{
    body.push(chunk);
    console.log(chunk);
  } );
  req.on('end',()=>{
    const parsed=Buffer.concat(body).toString();
    isim =parsed.split('=')[1].split('&')[0];
    //console.log(name);
  });
    //console.log(req.body.name);
    return res.render('login',{
    title: isim
    })
  }
