
const userRouter = require("express").Router();
var userHandler = require('../handlers/user-handler');
 

userRouter.get('/',async (req,res)=> {
  try {
  userHandler.Get(function(users){ 
           res.send(users);
      }) ;

    }catch(e){
      res.send('error');
     }

});



userRouter.get('/:userid',async (req,res)=> {

  try {
    var user_id = req.params.userid;
  
    userHandler.GetOne(user_id,function(user){
    res.send(user);
    }) ;
  }catch(e){
   res.send('error');
  }


});
 
 userRouter.post('/',async (req,res)=> {
   
  var user = req.body;
  userHandler.Post(user,function(data){
   res.send(data);
 }) ;
 });

 userRouter.put('/:id',async (req,res)=> {
   
  var id = req.params.id;
  var user = req.body;
  userHandler.Put(user,id,function(data){
   res.send(data);
 }) ;
 });


 userRouter.delete('/:id',async (req,res)=> {
   
  var id = req.params.id;
  userHandler.Delete(id,function(data){
   res.send(data);
 }) ;
 });
 

 

 

module.exports =userRouter;