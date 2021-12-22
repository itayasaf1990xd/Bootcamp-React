import React from "react";
import "./TodoList.css";
import TodoTask from "../TodoTask/TodoTask";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <>
      <div className="counter">
        {filteredTodos.length < 1 ? "You do not have any task yet..." : "You have " + filteredTodos.length + " task left"}
      </div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoTask
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            ></TodoTask>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
