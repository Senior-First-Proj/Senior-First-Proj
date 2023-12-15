const commRoute = require('express').Router();
const commCont = require('../controllers/comments.js');




commRoute.get('/allcomments/:idposts',commCont.getCom)
commRoute.post('/addComment', commCont.addCom)
commRoute.put('/updateCom/:idcomments',commCont.updateCom)
commRoute.delete('/deleteCom/:idcomments', commCont.deleteCom)


module.exports = commRoute;