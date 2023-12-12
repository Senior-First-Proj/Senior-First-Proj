const postRoute = require('express').Router();
const postCont = require('../controllers/postsCont.js');




postRoute.get('/getPosts/:userName',postCont.getPostsByUser)
postRoute.get('/getPosts/:catName',postCont.getPostsByCat)
postRoute.post('/addPost', postCont.addPost)
postRoute.put('/updatePost/:id',postCont.updatePost)
postRoute.delete('/deletePost/:id', postCont.deletePost)

module.exports = postRoute;