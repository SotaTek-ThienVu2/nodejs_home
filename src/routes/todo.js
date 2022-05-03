const express = require('express');
const router = express.Router();

const todoController = require('../app/controllers/TodoController');
// not match above => match below
router.get('/:slug', todoController.detail);
router.post('/', todoController.submit);
router.get('/', todoController.index);

module.exports = router;
