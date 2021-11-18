const express = require("express");

const {
  getAlltodos,
  getTodoById,
  getTodoCompleated,
  newTodo,
  ubdateTodo,
  deleteTodo,
} = require("./../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/", getAlltodos);
todoRouter.get("/:id", getTodoById);
todoRouter.get("/complete", getTodoCompleated);
todoRouter.post(newTodo);
todoRouter.put(ubdateTodo);
todoRouter.delete(deleteTodo);

module.exports = todoRouter;
