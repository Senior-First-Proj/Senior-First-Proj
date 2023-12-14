const {readUsersPosts, readPostsByCat,createPost,upPost,removePost} = require('../models/postsMod.js')



//getPostsByUser
const getPostsByUser=(req,res)=>{
   readUsersPosts(req.params.userName,(err,result)=>{result?res.json(result):console.log(err)})
}

//getPostsByCat
const getPostsByCat=(req,res)=>{
    readPostsByCat(req.params.catName,(err,result)=>{result?res.json(result):console.log(err)})
}

//addPost
const addPost=(req,res)=>{
    createPost(req.body,req.body.image,req.body.description,(err,result)=>{result?res.json(result):console.log(err)})
  }

//updatePost
const updatePost=(req,res)=>{
    upPost(req.params.id,req.body.image,req.body.description,(err,result)=>{result?res.json(result):console.log(err)})
}

//deletePost 
const deletePost=(req,res)=>{
    removePost(req.params.id,(err,result)=>{result?res.json(result):console.log(err)})
}

//Don't forget to export
module.exports={getPostsByUser,getPostsByCat,addPost,updatePost,deletePost}
