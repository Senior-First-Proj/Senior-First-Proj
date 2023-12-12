
const {readComByPost,createCom,upCom,removeCom} = require('../models/commentsMod.js')


//getCom by post id
const getCom=(req,res)=>{
    readComByPost(req.params.id,(err,result)=>{result?res.json(result):console.log(err)})
}

//addCom
const addCom=(req,res)=>{
    createCom(req.body.comment,(err,result)=>{result?res.json(result):console.log(err)})
  }
  

//updateCom
const updateCom=(req,res)=>{
    upCom(req.parmas.id,req.body.comment,(err,result)=>{result?res.json(result):console.log(err)})
}

//deleteCom
const deleteCom=(req,res)=>{
    removeCom(req.params.id,(err,result)=>{result?res.json(result):console.log(err)})
}


//Don't forget to export
module.exports={getCom,addCom,updateCom,deleteCom}