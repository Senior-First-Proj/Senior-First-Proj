const conn = require('../database/index.js')

const readPosts = (callback)=> {
    const sql = `select * from posts`
    conn.query(sql,(err,res)=>{callback(err,res)})
}
 
const readUsersPosts = (iduser,callback) => {
    const sql = `select * from posts where users_idusers= "${iduser}"`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const readPostsByCat = (catId,callback) =>{

    const sql = `select * from posts where categories_idtable2="${catId}"`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

const createPost = (newPost,callback) => {
    const sql = `insert into posts set ? `
    conn.query(sql,[newPost],(err,res)=>{callback(err,res)})
}

const upPost = (idpost,newPost,callback) => {
    const sql = `update posts set ? where idposts= ${idpost}`
    conn.query(sql,newPost,(err,res)=>{callback(err,res)})
}

const removePost = (idpost,callback) => {
    const sql = `delete from posts where idposts= ${idpost}`
    conn.query(sql,(err,res)=>{callback(err,res)})
}

module.exports = {readUsersPosts, readPostsByCat,createPost,upPost,removePost,readPosts}