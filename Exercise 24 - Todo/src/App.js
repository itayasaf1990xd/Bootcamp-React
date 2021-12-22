import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    loadLocalTodos();
  }, []);
  useEffect(() => {
    switch (selectedFilter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, selectedFilter]);

  const loadLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
        <h2>Orgenize all of your tasks is simple</h2>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setSelectedFilter={setSelectedFilter}
      ></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  );
}

export default App;
