//jwt.sign(payload, secretOrPrivateKey, [options, callback])
var fs = require('fs');
var jwt = require('jsonwebtoken');

 



const userHandler = require('./handlers/user-handler');

const Auth = require("express").Router();


Auth.createToken = function (userId, userType) {
  console.log('test toekn');
  var privateKey = fs.readFileSync(__dirname +'/private.key' );

  console.log(privateKey);
  return jwt.sign({ userId: userId, userType: userType }, privateKey);


}

//jwt.verify(token, secretOrPublicKey, [options, callback])


Auth.verifyAuth = function (token) {
  try {
    console.log(token);
    var key = fs.readFileSync(__dirname +'/private.key' );
    console.log(key.toString());
    var decoded = jwt.verify(token, key);
    console.log(decoded);
    return { status: true, payload: { userId: decoded.userId, userType: decoded.userType } };

  } catch (err) {
    // err
    return { status: false };
  }
}








Auth.get('/login', async (req, res) => {


  console.log('GGET')
  if (req.path === '/users/authenticate') {
    return next();
  }

  // check for basic auth header
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ status: false, message: 'Missing Authorization Header' });
  }

  // verify auth credentials



  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  

  userHandler.authenticate(username, password, function (result) {
   
    if (result.status) {

      delete result.data.dataValues.passcode;
    
      
      try{
          token = Auth.createToken(result.data.id, result.data.usertype);
      }catch(e){
          token="test";
          console.log(e);
      }

     
      console.log(token)
      res.send({ status: true, message: 'login succeed', data: { token: token, user: result.data } });
    } else {
      console.log('hese error')
      res.send({ status: false, message: 'wrong cridentials' });
    }



  });

});
  




  



   module.exports = Auth;