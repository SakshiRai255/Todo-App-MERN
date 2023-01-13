import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function TodoEdit() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Enter a new  Title"
      >
      
      <>
      <form>
      <div className="mb-3">
         <input type="text" className="form-control" id="FormControlInput1" placeholder="New Title"/>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary mx-2 px-4">Ok</button>
        <button type="submit" class="btn btn-primary mx-2">Cancel</button>
      </div>
      </form>

      
    </>


      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Edit</Button>
      </Group>
    </>
  );
}
export default TodoEdit




