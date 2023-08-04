const db = require('./config/db/indexDB');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/indexRoute');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/sortMiddleware');

//connect to DB
db.connect();

//(middleware):
//Chức năng xác thực (Anthentication)
//Chức năng phân quyền (Authorization)
//chia sẻ các giá trị của biến tới View All(BackEnd)
// app.use(Viet);
// function Viet(req, res, next){
//   if(['viet'].includes(req.query.u)) {
//     return next();
//   }
//   res.status(403).json({message: "Access denied"});
// }

app.use(express.static(__dirname + '/public'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//Custom middlewares
app.use(SortMiddleware);

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending',
        };
        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        return `<a href="?_sort&column=${field}&type=${type}">
        <span class="${icon}"></span>
      </a>`;
      },
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
