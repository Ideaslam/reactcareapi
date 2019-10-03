const Handler = require('./Handler');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//var Place = require('../models/place-model');
 var userHandler = {}
 
  
////////////////////////////////////////////

// Find all users


 
  
//   // Change everyone without a last name to "Doe"
//   userHandler.User.update({ lastName: "Doe" }, {
//     where: {
//       lastName: null
//     }
//   }).then(() => {
//     console.log("Done");
//   });



  userHandler.Get = async function (callback) {

    // User.sync({ force: false }).then(() => {
        
    //   });
  
    Handler.Get(User,User.attr() ,{}, [], function(result){   
         
        callback(result);      
    });
 
      
     
}

userHandler.GetOne = async function (id,callback) {
 
    Handler.Get(User,User.attr() ,{id:id}, [], function(result){   
  
   callback(result);      
});
    
}
 

userHandler.Post = async function (data,callback) {
 
    // encrypt the password
    var hash ;
    if(data.passcode != undefined)
    hash= bcrypt.hashSync(data.passcode, saltRounds);
    data.passcode= hash ;
 
     
    Handler.Post(User ,data,  function(result){

            delete result.data.dataValues["passcode"];
            callback(result); 
   });
    
}


userHandler.Put = async function (data,id,callback) {
      // encrypt the password
      var hash ;
      if(data.passcode != undefined)
      hash= bcrypt.hashSync(data.passcode, saltRounds);
      data.passcode= hash ;

    Handler.Put(User ,data,{id:id},  function(result){
            callback(result); 
   });
    
}


userHandler.Delete = async function (id,callback) {

    Handler.Delete(User ,{id:id},  function(result){
            callback(result); 
   });
    
}


userHandler.authenticate = async function (username,password,callback) {
 

    Handler.Get(User,['id','username','passcode','usertype' ,'imageurl'] ,{username:username},[],  function(result){   
         
        if(result.status){
             
            let res= bcrypt.compareSync(password, result.data[0].passcode);
         
                
             if(result.data.length>0  && res){
                 callback ({status:true, message:'correct cridentials' ,data:result.data[0]} );
             }else{
                 callback({status:false, message:'wrong cridentials'} );
             }
               
         }else{
             callback (result) ;
         }
     
});
  

}
 
 


module.exports =userHandler;