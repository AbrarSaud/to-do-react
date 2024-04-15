import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handChange = (e) => {
    // const name =e.target.name
    // const value =e.target.value
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };
  const haandleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    saveTask(taskObj);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name :</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>

              <textarea
                rows={5}
                className="form-control"
                value={description}
                onChange={handChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={haandleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
