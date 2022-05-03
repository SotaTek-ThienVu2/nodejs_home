const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const port = 3000;
const app = express();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses/views'));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
