module.exports = (req, res) => {
    console.log(req.body.name);
    return res.render('login',{
    title:req.body.name
    })
  }
