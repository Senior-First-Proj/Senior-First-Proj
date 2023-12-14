const conn = require('../database/index.js')

const readComByPost = (idPost,callback) => {
    const sql = `select * from comments where posts_idposts= ${idPost}`
    conn.query(sql,(err,res) => {callback(err,res)})
}

const createCom = (newCom,callback) => {
    const sql = `insert into comments set ? `
    conn.query(sql,newCom,(err,res) => {callback(err,res)})
}


const upCom = (idCom,newCom,callback) => {
    const sql = `update comments set ? where idcomments = ${idCom}`
    conn.query(sql,newCom,(err,res) => {callback(err,res)})
}

const removeCom = (idCom,callback) => {
    const sql = `delete from comments where idcomments= ${idCom}`
    conn.query(sql,(err,res)=> {callback(err,res)})
}

module.exports = {readComByPost,createCom,upCom,removeCom};