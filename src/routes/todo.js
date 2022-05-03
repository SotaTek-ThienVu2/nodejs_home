const express = require('express');
const router = express.Router();

const todoController = require('../app/controllers/TodoController');
// not match above => match below
router.use('/:slug', todoController.detail);
router.post('/', todoController.submit);
router.use('/', todoController.index);

module.exports = router;
