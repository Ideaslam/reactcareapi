

const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;
const ModelName ='users'
class User extends Model {}

 
User.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(50) ,
    unique: true
    // allowNull defaults to true
  },
  passcode: {
    type: Sequelize.STRING(200) 
    // allowNull defaults to true
  }
  ,
  usertype: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  }
  ,
  userstatus: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
  imageurl:{
    type: Sequelize.STRING(200) 
  }

}, {
  sequelize,
  modelName: ModelName
  // options
});



User.attr=()=>{

    return [
        'id',
        'username',
        'usertype',
        'userstatus',
        'imageurl'
    ]

}


module.exports =User;

