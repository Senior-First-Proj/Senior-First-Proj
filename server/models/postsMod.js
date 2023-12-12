const conn = require('../database/index.js')


const readUsersPosts = (idUser,callback) => {
    const sql = `select * from posts where users_idusers= ${idUser}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const readPostsByCat = (catName,callback) =>{
    const sql = `select * from posts where categories_idtable2=${catName}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const createPost = (newPost,callback) => {
    const sql = `insert into posts set ? `
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const upPost = (idpost,newPost,callback) => {
    const sql = `update posts set ? where idposts= ${idpost}`
    conn.query(sql,newPost,(err,res)=>{callback(err,res)})
}

const removePost = (idpost,callback) => {
    const sql = `delete from posts where idposts= ${idpost}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

module.exports = {readUsersPosts, readPostsByCat,createPost,upPost,removePost}