const express = require('express');
const todoController = require('../controllers/todoController.ts');

const router = express.Router();

router.get('/', todoController.welcome);
router.get('/todos', todoController.listTodos);

module.exports = router;
