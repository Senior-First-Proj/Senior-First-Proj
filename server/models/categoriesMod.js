
const conn = require('../database/index.js');

const createCat = (newCat,callback) => {
    const sql = `insert into categories set ?`
    conn.query(sql,newCat,(err,res)=>{callback(err,res)})
}


const removeCat = (catName,callback) => {
    const sql = `delete from categories where categoryName = "${catName}"`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

module.exports = {createCat,removeCat}
