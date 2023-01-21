import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoEdit from "./TodoEdit";
import "react-toastify/dist/ReactToastify.css";
import TodoDelete from "./TodoDelete";

function TodoList() {

  // link of backend
  const BASE_URL = "https://todo-app-mern-hazel.vercel.app";

  const [todoData, setTodoData] = useState(null);

  // function to get the Data from Backend
  const fetchTodoData = async () => {
    const resp = await axios.get(`${BASE_URL}/todo/getTodo`);
    if (resp.data.todo.length > 0) {
      setTodoData(resp.data.todo);
    }
  };

  // To handle the Default
  useEffect(() => {
    fetchTodoData();
  }, [todoData]);

  return (
  <>
     <div className="container mt-2 py-2">
     {todoData &&
          todoData.map((todo) => (
        <div className="d-flex flex-row my-4">
              <div className="form-control border border-2 border-success">
                {todo.title}
              </div>
              <TodoEdit todoId={todo._id} todoData={todo}/>
              <TodoDelete todoId={todo._id}/>
           </div>
         ))}
       </div>
    </>
  );
}

export default TodoList;
