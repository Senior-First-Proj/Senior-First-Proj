const userRoute = require('express').Router();
const userCont = require('../controllers/usersCont.js');



userRoute.get('/allUsers',userCont.getUsers)
userRoute.get('/oneUser/:userName',userCont.getOne)
userRoute.put('/updateUser/:userName',userCont.updateUser)
userRoute.delete('/deleteUser/:userName', userCont.deleteUser)

module.exports = userRoute;