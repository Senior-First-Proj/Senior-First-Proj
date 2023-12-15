const {createCat,removeCat,getCats} = require('../models/categoriesMod.js')


// getCat
const getCat=(req,res)=>{
  getCats((err,result)=>{result?res.json(result):console.log(err)})
}

//addCat
const addCat=(req,res)=>{
  createCat(req.body,(err,result)=>{result?res.json(result):console.log(err)})
}


//deleteCat
const deleteCat=(req,res)=>{
    removeCat(req.params.categoryName,(err,result)=>{result?res.json(result):console.log(err)})
}


//don't forget to export
module.exports={addCat,deleteCat,getCat}