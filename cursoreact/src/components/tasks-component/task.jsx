import React from "react";
import "./task.css";

const Task = ({ task, handleTaskClick }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid rgb(0, 112, 240)" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
  );
};

//return <div className="task-container">{task.title}</div>;
export default Task;
