const {readUsers,readOne,upUser,removeUser,addUser} = require('../models/usersMod.js')


// addUser

const addOneUser=(req,res)=>{
     addUser(req.body,(err,result)=>{result?res.json(result):console.log(err)})
}
//  getUsers
const getUsers=(req,res)=>{
    readUsers((err,result)=>{result?res.json(result):console.log(err)})
}

// getOne (to get one user by userName)
const getOne=(req,res)=>{
    readOne(req.params.name,(err,result)=>{result?res.json(result):console.log(err)})
}

// updateUser (to update a user by userName)
const updateUser=(req,res)=>{
    upUser(req.params.name,req.body.name.req.body.lastName,req.body.picture,(err,result)=>{result?res.json(result):console.log(err)})
}

//deleteUser (to delete a user by userName)
const deleteUser=(req,res)=>{
    removeUser(req.params.name,(err,result)=>{result?res.json(result):console.log(err)})
}

//Don't forget to export
module.exports={getUsers,getOne,updateUser,deleteUser,addOneUser}