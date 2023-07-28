const Course = require('../models/courseModel');
const { mutipleMongooseToObject } = require('../../util/mongooseUtil');

class SiteController {
  // [GET]/
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET]/search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
