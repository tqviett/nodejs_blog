var express = require('express');
var route = express.Router();

const siteController = require('../app/controllers/siteController');

route.get('/search', siteController.search);
route.get('/', siteController.index);

module.exports = route;
