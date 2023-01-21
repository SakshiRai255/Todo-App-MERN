import { useState, useEffect } from "react";
import { Modal, Button, Group } from "@mantine/core";
import axios from "axios";

function TodoEdit({ todoData ,todoId }) {

  const BASE_URL = "https://todo-app-mern-hazel.vercel.app";

  const id = todoId;

  const [opened, setOpened] = useState(false);
  const { todo, ...other } = todoData;
  const [todoNewTitle, setTodoNewTitle] = useState(other);

  // set the value
  const handleChange = (e) => {
    setTodoNewTitle({ ...todoNewTitle, [e.target.name]: e.target.value });
  };

  // Handle Edit Function
  const handleEdit = async () => {
    const editData = {
      title: todoNewTitle.title,
    };
    const result = await axios.put(`${BASE_URL}/todo/editTodo/${id}`, editData)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit();
    setOpened(false);
  };

  const handleCancel = ()=>{
    setOpened(false);
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Enter a new Title">
        <>
            <div className="mb-3">
              <input type="text"
                className="form-control" name="title"
                placeholder="New Title"
                onChange={handleChange}
                value={todoNewTitle.title}
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary mx-2 px-4" onClick={handleSubmit}>Ok</button>
              <button type="submit" class="btn btn-danger mx-2 px-4" onClick={handleCancel}>Cancel</button>
            </div>
        </>

      </Modal>
      <Group position="center">
        <Button sx={{marginLeft:"4px"}} onClick={() => setOpened(true)}>Edit</Button>
      </Group>
    </>
  );
}
export default TodoEdit;
