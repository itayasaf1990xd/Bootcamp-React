import React, { useState } from "react";
import Task from "../Components/Task/Task.component";
import "./MainPage.css";

function MainPage() {
  const [tasks, setTasks] = useState([
    { name: "Css", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn Mongo Database", completed: false },
    { name: "Learn Node Javascript", completed: false },
  ]);

  const renderTasks = (name) => {
    // const tempTasks = [...tasks];
    // const tempTask = tempTasks.find((task) => task.name === name);
    // tempTask.completed = !tempTask.completed;
    // setTasks(tempTasks);

    const temp = tasks.map((taskItem) => {
      if (taskItem.name === name) {
        return {
          name: taskItem.name,
          completed: !taskItem.completed,
        };
      }
      return taskItem;
    });
    setTasks(temp);
  };

  return (
    <div className="container">
      {tasks.map((task) => {
        return (
          <Task
            taskDetails={task}
            key={task.name}
            renderTasks={() => renderTasks(task.name)}
          />
        );
      })}
    </div>
  );
}

export default MainPage;
