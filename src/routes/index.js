const todoRouter = require('./todo');
const homeRouter = require('./site');
function route(app) {
  app.use('/todo', todoRouter);
  app.use('/', homeRouter);
}

module.exports = route;
