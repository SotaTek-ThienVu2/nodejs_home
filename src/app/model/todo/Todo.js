const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Todo = new Schema({
  id: ObjectId,
  title: String,
  content: String,
  createdDate: { type: Date, default: Date.now() },
  modifiedDate: { type: Date, default: Date.now() },
  createdBy: String,
  priority: String,
});

module.exports = mongoose.model('Todo', Todo);
