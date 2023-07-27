var express= require('express');
var route= express.Router();

const newsController= require('../app/controllers/newsController')

// newsController.index

route.use('/:slug', newsController.show)
route.use('/',newsController.index)

module.exports=route;