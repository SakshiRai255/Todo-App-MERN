import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import axios from "axios";

function Task({ addText, setAddText }) {
   // To store the value from frontend
  const [todoTask, setTodoTask] = useState("");

    // function to send the Data
  const submitTask = async () => {
    const data = {
      task: todoTask,
    };
    const result = await axios.post(`/createTask/63affcf9c428a0badbda9c5c`,data);
    console.log(result);
  };

  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // to submit the data
    submitTask();

    // to empty the data
    setTodoTask("");
  };

  return (
    <>
      {addText && (
        <div className="container border border-2 border-danger m-5 p-4">
          <form onSubmit={handleSubmit}>
            <div
              className="d-inline-flex border float-end p-2  bg-danger"
              onClick={() => setAddText(false)}
            >
              <TfiClose className="text-white" />
            </div>

            <div className="d-flex">
              <input
                style={{ textIndent: "10px" }}
                type="text"
                className="form-control border border-2 border-success"
                placeholder="Add Task"
                value={todoTask}
                onChange={(event) => {
                  setTodoTask(event.target.value);
                }}
              />

              <button
                type="submit"
                className="btn btn-success mx-2"
                style={{ width: "140px", height: "50px" }}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default Task;
