import React from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

function Form({ inputText, setInputText, todos, setTodos, setSelectedFilter }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = () => {
    if (inputText === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: uuidv4(), description: inputText, isCompleted: false },
    ]);
    setInputText("");
  };
  const FilterTodoHandler = (e) => {
    setSelectedFilter(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        className="todo-input"
        type="text"
        onChange={inputTextHandler}
        placeholder="Add a new task..."
        required={true}
      />
      <button className="todo-button" type="button" onClick={submitTodoHandler}>
        <i className="fas fa-plus fa-xs"></i>
      </button>
      <div className="select">
        <select
          onChange={FilterTodoHandler}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
