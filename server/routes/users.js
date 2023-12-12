const userRoute = require('express').Router();
const userCont = require('../controllers/usersCont.js');

userRoute.get('/allUsers',userCont.getAll)


module.exports = userRoute;