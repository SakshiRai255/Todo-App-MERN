// URL PATH
const express = require("express");
const {
  home,
  createTodo,
  getTodo,
  getTodoById,
  editTodo,
  deleteTodo,
} = require("../controllers/todocontrollers");

const { createTask,editTask,deleteTask} = require("../controllers/taskController");

const router = express.Router();

// Todo Router

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodo/:id", getTodoById);
router.get("/getTodo", getTodo);

router.put("/editTodo/:id", editTodo);

router.delete("/deleteTodo/:id", deleteTodo);

// Task Router
 
router.post("/createTask/:id",createTask);
router.patch("/editTask/:id",editTask);
router.delete("/deleteTask/:id",deleteTask);


module.exports = router;