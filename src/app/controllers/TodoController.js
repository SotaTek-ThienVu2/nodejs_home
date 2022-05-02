class TodoController {
  index(req, res) {
    res.render("todo");
  }
  detail(req, res) {
    res.send("NO DATA");
  }
  submit(req, res) {
    console.log(req.body);
    res.send(req.body);
  }
}
module.exports = new TodoController();
