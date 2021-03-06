const http = require('http');
const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const path=require('path');
//const mongoConnect=require('./utility/database');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const mongoDbStore=require('connect-mongodb-session')(session);
const connectionString='mongodb+srv://sinan:sinanpera@cluster0.hjeq5.mongodb.net/test';



const hostname = '127.0.0.1';
const port = 3000;

const indexRouteController=require('./routes/indexRoute');
const loginRouteController=require('./routes/loginRoute');
const adminRouteController=require('./routes/adminRoute.js');
const registerRouteController=require('./routes/registerRoute');
const homeRouteController=require('./routes/homeRoute');
const resetPasswordRouteController=require('./routes/resetPasswordRoute');
const newPasswordRouteController=require('./routes/newPasswordRoute');
const server = http.createServer(app);

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
var store=new mongoDbStore({
uri:connectionString,
collection:'mySessions'
});
app.use(cookieParser());
app.use(session({
 secret:'pera',
 resave: false,
 saveUninitialized: false,
 cookie:{
   maxAge:3600000
 },
 store:store

}));
app.use('/', indexRouteController);
app.use('/login', loginRouteController);
app.use('/admin', adminRouteController);
app.use('/register', registerRouteController);
app.use('/home', homeRouteController);
app.use('/resetPassword',resetPasswordRouteController)
app.use('/newPassword',newPasswordRouteController)

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(__dirname,"views","404.html"));
  
})
mongoose.connect(connectionString,{ useFindAndModify: false })
.then(()=>{
console.log("connected to mongodb");
console.log(process.env.SENDGRID_API_KEY);
app.listen(3000);
})
.catch(err=>{
  console.log(err);
})




/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
