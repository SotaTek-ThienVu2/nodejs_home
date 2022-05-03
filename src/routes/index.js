const newsRouter = require('./news');
const todoRouter = require('./todo');
const homeRouter = require('./site');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/todo', todoRouter);
  app.use('/', homeRouter);
}

module.exports = route;
