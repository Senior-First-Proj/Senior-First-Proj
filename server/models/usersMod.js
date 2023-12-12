const connection = require('../database/index.js');

const readAll = (callback) => {
    const sql = `select * from users`
    connection.query(sql,(err,res)=>{callback(err,res)})
}
