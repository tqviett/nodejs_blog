const newsRoute = require('./newsRoute');
const siteRoute = require('./siteRoute');

function route(app) {
  app.use('/news', newsRoute);

  app.use('/', siteRoute);
}

module.exports = route;
