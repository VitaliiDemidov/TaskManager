import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/taskListContext";

export const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const heandleChange = e => {
    setTitle(e.target.value);
  };

  const heandleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={heandleSubmit} action="" className="form">
        <input
          type="text"
          value={title}
          className="task-input"
          placeholder="Add task"
          required
          onChange={heandleChange}
        />{" "}
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? "Edit Task" : "Add Task "}
          </button>
          <button onClick={clearList} className="btn clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
