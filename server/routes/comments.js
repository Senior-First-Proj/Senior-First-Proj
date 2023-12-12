const commRoute = require('express').Router();
const commCont = require('../controllers/comments.js');




commRoute.get('/allcomments',commCont.getCom)
commRoute.post('/addComment', commCont.addCom)
commRoute.put('/updateComm/:id',commCont.updateCom)
commRoute.delete('/deleteComm/:id', commCont.deleteCom)


module.exports = commRoute;