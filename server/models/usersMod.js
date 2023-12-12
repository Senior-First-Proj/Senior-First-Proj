const conn = require('../database/index.js')


const readUsers = (callback) => {
    const sql = `select * from users `
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const readOne = (userName,callback) =>{
    const sql = `select * from users where name=${userName}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const upUser = (userName,newUser,callback) => {
    const sql = `update users set ? where name= ${userName}`
    conn.query(sql,newUser,(err,res)=>{callback(err,res)})
}

const removeUser = (userName,callback) => {
    const sql = `delete from users where name = ${userName}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

module.exports = {readUsers,readOne,upUser,removeUser}