// Bussiness Logic

const Todo = require("../modal/todoModals");

exports.home = (req, res) => {
  res.send("Hello World");
};

//  take the todo from frontend
exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(401).json({
        success: false,
        message: "Title is required",
      });
    }

    // Inserting in to Datbase
    const todo = await Todo.create({ title });
    res.status(201).json({
      success: true,
      message: "Title is Created Successfully",
      todo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Todo from Database

exports.getTodo = async (req, res) => {
  try {
    const getTodo = await Todo.find();
    res.status(200).json({
      success: true,
      getTodo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

// Edit Todo or Update Todo

exports.editTodo = async (req, res) => {
  try {
    const editTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Title Updated Successfully",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Todo from Database

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deleteTodo = await Todo.findByIdAndDelete(todoId);
    res.status(201).json({
      success: true,
      message: "Title Deleted Successfully",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};