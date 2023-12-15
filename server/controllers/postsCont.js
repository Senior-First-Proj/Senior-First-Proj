const {readUsersPosts, readPostsByCat,createPost,upPost,removePost,readPosts} = require('../models/postsMod.js')

//getPosts
const getPosts=(req,res)=>{
    readPosts((err,result)=>{result?res.json(result):console.log(err)})
 }

//getPostsByUser
const getPostsByUser=(req,res)=>{
   readUsersPosts(req.params.idusers,(err,result)=>{result?res.json(result):console.log(err)})
}

//getPostsByCat
const getPostsByCat=(req,res)=>{
    readPostsByCat(req.params.idtable2,(err,result)=>{result?res.json(result):console.log(err)})
}

//addPost
const addPost=(req,res)=>{
    createPost(req.body,(err,result)=>{result?res.json(result):console.log(err)})
  }

//updatePost
const updatePost=(req,res)=>{
    upPost(req.params.id,req.body,(err,result)=>{result?res.json(result):console.log(err)})
}

//deletePost 
const deletePost=(req,res)=>{
    removePost(req.params.id,(err,result)=>{result?res.json(result):console.log(err)})
}

//Don't forget to export
module.exports={getPostsByUser,getPostsByCat,addPost,updatePost,deletePost,getPosts}
