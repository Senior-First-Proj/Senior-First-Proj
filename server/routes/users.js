const userRoute = require('express').Router();
const userCont = require('../controllers/usersCont.js');



userRoute.get('/allUsers',userCont.getUsers)
userRoute.get('/oneUser/:id',userCont.getOne)
userRoute.post('/addUser',userCont.addOneUser)
userRoute.put('/updateUser/:id',userCont.updateUser)
userRoute.delete('/deleteUser/:id', userCont.deleteUser)

module.exports = userRoute;