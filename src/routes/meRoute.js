var express = require('express');
var route = express.Router();

const MeController = require('../app/controllers/meController');

// newsController.index
route.get('/stored/courses', MeController.storedCourses);

module.exports = route;
