import React from "react";
import "./TodoTask.css";
function TodoTask({ todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
        {todo.description}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoTask;
