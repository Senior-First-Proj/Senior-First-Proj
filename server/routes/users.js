const userRoute = require('express').Router();
const userCont = require('../controllers/usersCont.js');



userRoute.get('/allUsers',userCont.getUsers)
userRoute.get('/oneUser/:idusers',userCont.getOne)
userRoute.post('/addUser',userCont.addOneUser)
userRoute.put('/updateUser/:idusers',userCont.updateUser)
userRoute.delete('/deleteUser/:idusers', userCont.deleteUser)

module.exports = userRoute;