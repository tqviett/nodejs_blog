class NewsController {
  // [GET]/news
  index(req, res) {
    res.render('news');
  }

  //[GET]/news/:slug
  show(req, res) {
    res.send('<h1>News detail</h1>');
  }
}

module.exports = new NewsController();
