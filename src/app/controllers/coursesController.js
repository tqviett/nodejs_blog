const Course = require('../models/courseModel');
const { mongooseToObject } = require('../../util/mongooseUtil');

class SiteController {
  //[GET]/courses:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
