module.exports = (req, res) => {
    console.log("here");
    return res.render('login',{
    title:req.body.name
    })
  }