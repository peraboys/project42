const http = require('http');
const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const path=require('path');
//const mongoConnect=require('./utility/database');
const mongoose=require('mongoose');




const hostname = '127.0.0.1';
const port = 3000;

const indexRouteController=require('./routes/indexRoute');
const loginRouteController=require('./routes/loginRoute');
const adminRouteController=require('./routes/adminRoute.js');
const registerRouteController=require('./routes/registerRoute');
const homeRouteController=require('./routes/homeRoute');

const server = http.createServer(app);

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouteController);
app.use('/login', loginRouteController);
app.use('/admin', adminRouteController);
app.use('/register', registerRouteController);
app.use('/home', homeRouteController);
app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(__dirname,"views","404.html"));
  
})
mongoose.connect('mongodb+srv://sinan:sinanpera@cluster0.hjeq5.mongodb.net/test',{ useFindAndModify: false })
.then(()=>{
console.log("connected to mongodb");
app.listen(3000);
})
.catch(err=>{
  console.log(err);
})




/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
