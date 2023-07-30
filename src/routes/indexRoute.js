const coursesRoute = require('./coursesRoute');
const newsRoute = require('./newsRoute');
const siteRoute = require('./siteRoute');
const meRoute = require('./meRoute');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/me', meRoute);
  app.use('/courses', coursesRoute);
  app.use('/', siteRoute);
}

module.exports = route;
