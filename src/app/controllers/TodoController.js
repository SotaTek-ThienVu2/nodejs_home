const Todo = require('../model/todo/Todo');
class TodoController {
  index(req, res, next) {
    // Thêm lean để trả về json object thay vì mongoose object => sửa lỗi của handlenars
    Todo.find({})
      .lean()
      .then((todo) => res.render('todo', { todo }))
      .catch((error) => next(error));
  }
  detail(req, res) {
    res.send('NO DATA');
  }
  submit(req, res) {
    console.log(req.body);
    res.send(req.body);
  }
}
module.exports = new TodoController();
