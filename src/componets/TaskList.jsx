import React, { useContext } from "react";
import { TaskListContext } from "../context/taskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No task</div>
      )}
    </div>
  );
};

export default TaskList;
