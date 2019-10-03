
 
var Auth = require('./Auth');
 
 
module.exports =function (req ,res ,next){
  
    try {
// check for basic auth header
if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
}

// verify auth credentials
const token =  req.headers.authorization.split(' ')[1];


      //if can verify the token, set req.user and pass to next middleware
      const decoded = Auth.verifyAuth(token);
      if(!decoded.status)
      throw new Error();
      
      req.user = decoded;
        
      next();
    } catch (ex) {
      //if invalid token
      res.status(400).send({status :false , message :'Invalid Token'});
    }
 
}
