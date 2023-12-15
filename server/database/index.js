const mysql = require("mysql2");


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'farahkh',
    database : 'seniorproj'     
  });

connection.connect((err)=>{err ? console.log(err) : console.log("Team2 connected")})


module.exports = connection;