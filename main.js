const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
const db = require('./db');
const router = require("./routers");
const Auth = require("./Auth");
 

 

const app = express();

 

const APP_PORT =3264 ;
app.listen(APP_PORT, () => {
    console.log("CONNECTED TO SERVER ON PORT 3264");
});
app.use(bodyParser.json({ limit:'50mb' })); 
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb',parameterLimit:50000 }));
app.use(cors());
app.options('*', cors());


app.use(express.static(path.join(__dirname,'../dist')));
app.use('/profile',express.static(path.join(__dirname,'./images/users')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  
app.use('/',router ); 


//var name ="";

// app.get('/auth/sign/:name',(req,res)=>{
//       name =req.params.name ;
//     var token =Auth.createToken(name);
//     res.send(token);
// } ); 

// app.get('/auth/verify/:token',(req,res)=>{
//     var token =req.params.token ;
//    var payload =  Auth.verifyAuth(token);
//    res.send(payload == name ? true :false) ; 
   
// } ); 


