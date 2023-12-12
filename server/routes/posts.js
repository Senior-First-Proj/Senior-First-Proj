const postRoute = require('express').Router();
const postCont = require('../controllers/postsCont.js');

postRoute.get('/allPosts',postCont.getAll)
postRoute.post('/addPost',postCont.addPost)
postRoute.put('/updatePost', postCont.updatePost)
postRoute.delete('/deletePost', postCont.deletePost)

module.exports = postRoute;