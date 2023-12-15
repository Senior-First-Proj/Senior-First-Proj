const catRoute = require('express').Router();
const catCont = require('../controllers/categories.js');


catRoute.get('/allCats',catCont.getCat)
catRoute.post('/addCat',catCont.addCat)
catRoute.delete('/deleteCat/:catName', catCont.deleteCat)

module.exports = catRoute;