import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


function TodoTitles() {

  const BASE_URL = "https://todo-app-mern-hazel.vercel.app"

  const [todoData, setTodoData] = useState(null);


  // function to get the Data from Backend
  const fetchTodoData = async () => {
    const resp = await axios.get(`${BASE_URL}/getTodo`);
    if (resp.data.getTodo.length > 0) {
      setTodoData(resp.data.getTodo);
    }
  };

  // To handle the Default
  useEffect(() => {
    fetchTodoData();
  }, [todoData]);

  // Edit Todo  Function
  const handleEdit = async (editTodo) => {
    const newTitle = prompt("Enter a New Title");
    if (newTitle) {
      const resp = await axios.put(`${BASE_URL}/editTodo/${editTodo._id}`, {
        title: newTitle,
      });
      const notify = () => {
        toast.success(`Todo Edit Successfully`);
      };
      notify();
    }
  };

  // Delete Todo Function
  const handleDelete = async (todoId) => {
    const resp = await axios.delete(`${BASE_URL}/deleteTodo/${todoId}`);
    const notify = () => {
      toast.error("Delete Successfully");
    };
    notify();
  };

  return (
    <>
      <div className="container mt-2 py-2">
        {todoData &&
          todoData.map((todo) => (
            <div className="d-flex flex-row my-4">
              <div className="form-control border border-2 border-success">
                {todo.title}
              </div>
              <button
                type="submit"
                class="btn btn-primary mx-1 px-3"
                onClick={() => {
                  handleEdit(todo);
                }}
              >
                Edit
              </button>
              
              <button
                type="submit"
                class="btn btn-danger mx-1"
                onClick={() => {
                  handleDelete(todo._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default TodoTitles;
