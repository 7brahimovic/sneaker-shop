
const express = require('express')

const todoRouter = express.Router();
const todoCtrl = require('../controllers/todo-ctrl')

todoRouter.get('/',todoCtrl.getAllTodos )
todoRouter.get('/:id',todoCtrl.getTodo )
todoRouter.post('/add',todoCtrl.addTodo )
todoRouter.post('/update/:id',todoCtrl.updateTodo )

module.exports = todoRouter