import React, { useState } from "react";
import TodoTitles from "./TodoTitles";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todo() {
  
  // link of backend
  
  const BASE_URL = "https://todo-app-mern-hazel.vercel.app"

  // To store the value from frontend
  const [todoTitle, setTodoTitle] = useState("");


  // function to send the Data
  const submitData = async () => {
    const data = {
      title: todoTitle,
    };
    const result = await axios.post(`${BASE_URL}/createTodo`, data);
       notify();
  };
    
  const notify = () => {
    toast.success(`Todo Added Successfully`);
  };
  
  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // to submit the data
    submitData();


    // to empty the data
    setTodoTitle("");
  };

  return (
    <>
      <div className="container my-10 mt-5 py-2">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
            <input
              style={{ textIndent: "10px" }}
              type="text"
              className="form-control border border-2 border-success"
              placeholder="Add Todo"
              value={todoTitle}
              onChange={(event) => {
                setTodoTitle(event.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-success mx-2"
              style={{ width: "140px", height: "50px" }}
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <div className="container my-10 mt-5">
        <TodoTitles></TodoTitles>
      </div>
      <ToastContainer />
    </>
  );
}

export default Todo;
