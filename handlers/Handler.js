const db = require('../db');


 var Handler ={}; 
 
 

  Handler.Get = async  function (entity ,attrs ,where ,include ,callback) {
 
    entity.findAll({
      attributes:attrs,
      where:where,
      include:include 
    }).then(result => {
      
      callback({status :true ,message:'Data Returned' ,data:result}) ;
    }).catch(function (err) {
       callback({status :false ,message:err.message}) ;
    }) ;
 
  } 

 


Handler.Post = async  function (entity,data ,callback) {
 
     // Create a new user
     entity.create(data).then(result => {
    callback({status :true ,message:'Data Saved' ,data:result}) ;
  }).catch(function (err) {
    callback({status :false ,message:err.message}) ;
  }) ;
   

}



Handler.Put = async  function (entity,data ,where ,callback) {

  // Change everyone without a last name to "Doe"
  entity.update(data, {
    where: where
  }).then(result => {
    callback({status :true ,message:'Data Updated' ,data:result}) ;
  }).catch(function (err) {
    callback({status :false ,message:err.message}) ;
  }) ;


}

Handler.Delete = async  function (entity  ,where ,callback) {
 
  // Delete everyone named "Jane"
  entity.destroy({
    where:  where 
  }).then(()=> {
    callback({status :true ,message:'Data Deleted' }) ;
  }).catch(function (err) {
    callback({status :false ,message:err.message}) ;
  });  
} 



// Handler.GetData = async  function (query ,callback) {
  
//       db.Get(query,function(err ,result){
//         console.log(err);
//           if(err){
//             callback({status :false ,message:err.message}) ;
//           }else
//           {
//             callback({status :true ,message:'Data Returned' ,data:result.rows}) ;
//           }

//     }) ;
// } 



 



module.exports =Handler ;




//function preparePost(data){
  //            var keys=""; 
  //            var keysPoint=""; 
   
  
  //       for(key in data){
  //           keys+=""+key+"," ;
  //           keysPoint+=":"+key+"," ;
            
  //       }
  
  //       keys= keys.slice(0, -1) ;
  //       keysPoint= keysPoint.slice(0, -1) ;
       
  
  //       return {keys:keys, keysPoint:keysPoint ,values:Object.values(data)} ;
  // }
  

  // Handler.GenerateId =function(){
  //   var number = Math.random()  
  //   var id = number.toString(36).substr(2, 9);  
  //   id.length >= 9;  
  
  //   return id; 
  // }