const {createCat,removeCat} = require('../models/categoriesMod.js')


//addCat
const addCat=(req,res)=>{
  createCat(req.body.categoryName,(err,result)=>{result?res.json(result):console.log(err)})
}


//deleteCat
const deleteCat=(req,res)=>{
    removeCat((err,result)=>{result?res.json(result):console.log(err)})
}


//don't forget to export
module.exports={addCat,deleteCat}
