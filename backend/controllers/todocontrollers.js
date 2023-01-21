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
    const todo = await Todo.find();
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getTodoById = async (req,res) =>{
  const todoId = req.params.id
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json("Todo not find by this Id")
    }
    return res.status(200).json({
      message:"Successfully",
      todo,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    }); 
  }
}

// Edit Todo or Update Todo

exports.editTodo = async (req, res) => {

  const id = req.params.id;
  const { title } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(id,{title});
    if (!todo) {
      return res.status(404).json({
        message: "Unable to updated by this Id",
      });
    }
    await todo.save();
    return res.status(200).json({
      success: true,
      message: "Title Updated Successfully",
      todo
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