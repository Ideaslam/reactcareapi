 
const Sequelize = require('sequelize');


const dbOption = {
  
    username: 'sa',
    password: '05510551',
    database: 'hafez',

}


// Option 1: Passing parameters separately
const sequelize = new Sequelize(dbOption.database, dbOption.username, dbOption.password, {
  host: 'localhost',
  dialect: 'mssql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  

module.exports = sequelize;

// var db = {};
// let connection;
// var oracledb = require('oracledb');



// const dbOption = {
//     provider: 'oracle',
//     username: 'hafez',
//     password: 'hafez0551',
//     server: 'online',

// }



//  openConn = async function () {
//     try {
//         connection = await oracledb.getConnection({
//             user: dbOption.username,
//             password: dbOption.password,
//             connectString: dbOption.server
//         });
//         console.log("Successfully connected to Oracle!");
        

//     } catch (err) {
//         console.log("Error: ", err);
//     }
// }


//  closeConn = async function () {
//     if (connection) {
//         try {
//             await connection.close();
//             console.log("Successfully Closed Connection to Oracle!");
//         } catch (err) {
//             console.log("Error when closing the database connection: ", err);
//         }
//     }
// }

// db.Get = async function (query,callback) {

//     await openConn();
//        connection.execute(query, [], {outFormat: oracledb.OBJECT },async function (err, result) {
//         if (err) {
//             // console.error(err.message); 
//              callback( {err:true ,message:err.message},null);
//              await closeConn();
//          } else{
//              await closeConn();
              
//              callback(null,result);
//          }
//     }
//     )
 
// }


// db.Post = async function (query,data  ,callback) {

//     await openConn();


//        connection.execute(query, data, { autoCommit: true , outFormat: oracledb.OBJECT   } ,async function (err, result) {
//         if (err) {
//            // console.error(err.message); 
//             callback( {err:true ,message:err.message},null);
//             await closeConn();
//         } else{
//             await closeConn();
             
//             callback(null,result);
//         }

       
//     }
//     )
 
// }


 






















// const sql = require('mssql')


// const dbOption={
//     provider : 'oracle' ,
//     username: 'hafez',
//     password: 'hafez0551',
//     server: 'XE',

// }



// async () => {
//     try {
//         await sql.connect('mssql://username:password@localhost/database')
//         const result = await sql.query`select * from mytable where id = ${value}`
//         console.dir(result)
//     } catch (err) {
//         // ... error checks
//     }
// }



