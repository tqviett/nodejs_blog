const db = require('./config/db/indexDB');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/indexRoute');
const methodOverride = require('method-override');

//connect to DB
db.connect();

app.use(express.static(__dirname + '/public'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);
//127.0.0.1
app.listen(port, () => {
  console.log(`VIETBLOG PORT: http://localhost:${port}`);
});
