import React, { useState } from "react";
import { Modal, Group } from "@mantine/core";
import axios from "axios";

function TodoDelete({ todoId }) {
  const BASE_URL = "https://todo-app-mern-hazel.vercel.app";
  const [opened, setOpened] = useState(false);
  const id = todoId;

  // Delete Todo Function
  const handleDelete = async () => {
    const resp = await axios.delete(`${BASE_URL}/todo/deleteTodo/${id}`);
    setOpened(false)
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Are you sure! You want to delete this Todo">
        <>
          <div class="col-12">
            <button type="submit" class="btn btn-danger mx-2 px-4" onClick={handleDelete}>Ok</button>
          </div>
        </>
      </Modal>
      <Group position="center">
        <button class="btn btn-danger mx-2 px-4" onClick={() =>setOpened(true)} >Delete</button>
      </Group>
    </>
  );
}

export default TodoDelete;
