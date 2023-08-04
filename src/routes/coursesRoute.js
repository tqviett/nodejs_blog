var express = require('express');
var route = express.Router();

const CoursesController = require('../app/controllers/coursesController');

// newsController.index
route.get('/create', CoursesController.create);
route.post('/store', CoursesController.store);
route.post('/recycle-form-actions', CoursesController.recycleFormActions);
route.post('/handle-form-actions', CoursesController.handleFormActions);
route.get('/:id/edit', CoursesController.edit);
route.put('/:id', CoursesController.update);
route.patch('/:id/restore', CoursesController.restore);
route.delete('/:id', CoursesController.delete);
route.delete('/:id/force', CoursesController.forceDelete);
route.get('/:slug', CoursesController.show);

module.exports = route;
