const postRoute = require('express').Router();
const postCont = require('../controllers/postsCont.js');



postRoute.get('/getPosts/allposts',postCont.getPosts)
postRoute.get('/getPostByUser/:idusers',postCont.getPostsByUser)
postRoute.get('/getPostByCat/:idtable2',postCont.getPostsByCat)
postRoute.post('/addPost', postCont.addPost)
postRoute.put('/updatePost/:id',postCont.updatePost)
postRoute.delete('/deletePost/:id', postCont.deletePost)

module.exports = postRoute;