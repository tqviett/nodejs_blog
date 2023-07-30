var express = require('express');
var route = express.Router();

const CoursesController = require('../app/controllers/coursesController');

// newsController.index
route.get('/create', CoursesController.create);
route.post('/store', CoursesController.store);
route.get('/:id/edit', CoursesController.edit);
route.put('/:id', CoursesController.update);
route.get('/:slug', CoursesController.show);

module.exports = route;
