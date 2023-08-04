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

  //[GET]/courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
  //[POST]/courses/store
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  //[GET] /courses:id/edit
  edit(req, res, next) {
    Course.findOne({ slug: req.params.id })
      .then((course) => {
        res.render('courses/edit', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[PUT] /courses:id
  update(req, res, next) {
    console.log(req.params);
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  //[DELETE] /courses:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back')) //nếu thành công, sau đó thực thi res...
      .catch(next); //nếu thất bại, sẽ bắt lỗi....
  }
  //[DELETE] /courses:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back')) //nếu thành công, sau đó thực thi res...
      .catch(next); //nếu thất bại, sẽ bắt lỗi....
  }

  //[PATCH] /courses:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back')) //nếu thành công, sau đó thực thi res...
      .catch(next); //nếu thất bại, sẽ bắt lỗi....
  }
  //[POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: 'Action not allowed!!!' });
    }
  }
}
module.exports = new SiteController();
