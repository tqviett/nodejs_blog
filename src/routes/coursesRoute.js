var express = require('express');
var route = express.Router();

const CoursesController = require('../app/controllers/coursesController');

// newsController.index

route.get('/:slug', CoursesController.show);

module.exports = route;
