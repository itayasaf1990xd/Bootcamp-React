import React from "react";
import "./Task.component.css";

const Task = ({ taskDetails, renderTasks }) => {
  return (
    <div className="task">
      <div
        className={
          "content " + (taskDetails.completed ? "line-through" : "none")
        }
      >
        {taskDetails.name}
      </div>
      <div className="icon" onClick={() => renderTasks()}>
        {taskDetails.completed ? (
          <i className="icon-good fas fa-check"></i>
        ) : (
          <i className="icon-bad fas fa-times"></i>
        )}
      </div>
    </div>
  );
};

export default Task;
