const mysql = require("mysql2");


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'farahkh',
    database : ''     // please add the database name 
  });

connection.connect((err)=>{err ? console.log(err) : console.log("Team2 connected")})


module.exports = connection;