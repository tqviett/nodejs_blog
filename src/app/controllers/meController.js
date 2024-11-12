const Course = require('../models/courseModel');
const { mutipleMongooseToObject } = require('../../util/mongooseUtil');
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({});

    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([
      Course.countDocumentsWithDeleted({ deleted: true }),
      courseQuery,
    ])
      .then(([deletedCount, courses]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
  // [GET] /me/stored/news
  newsCourses(req, res, next) {
    res.json('abc');
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
