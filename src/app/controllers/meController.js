const Course = require('../models/courseModel');
const { mutipleMongooseToObject } = require('../../util/mongooseUtil');
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.countDocumentsWithDeleted({ deleted: true }),
      Course.find({}),
    ])
      .then(([deletedCount, courses]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
