const express = require('express');
const todoController = require('../controllers/todoController.ts');

const router = express.Router();

router.get('/', todoController.welcome);
router.get('/todos', todoController.listTodos);
router.put('/addnewtodo', todoController.addNewTodo)
router.delete('/todos/:id', todoController.deleteTodo)
router.put('/todos/update', todoController.updateTodo)

module.exports = router;
