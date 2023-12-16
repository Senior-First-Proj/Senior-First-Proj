const conn = require('../database/index.js')


const readUsers = (callback) => {
    const sql = `select * from users `
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const readOne = (id,callback) =>{
    const sql = `select * from users where idusers=${id}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const addUser = (newUser,callback) => {
    const sql = `insert into users set ?`
    conn.query(sql,[newUser],(err,result)=>{callback(err,result)})
}

const upUser = (id,newUser,callback) => {
    const sql = `update users set ? where idusers=${id} `
    conn.query(sql,newUser,(err,res)=>{callback(err,res)})
}

const removeUser = (id,callback) => {
    const sql = `delete from users where idusers=${id}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

module.exports = {readUsers,readOne,upUser,removeUser,addUser}