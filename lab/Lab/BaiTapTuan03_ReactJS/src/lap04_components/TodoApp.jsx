import React, { useState, useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React", done: false },
    { id: 2, text: "Làm bài tập", done: false },
  ]);

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }, []);

  return (
    <div className="todo-container">
      <h1 className="title">Todo Performance</h1>

      <TodoInput onAdd={handleAdd} />

      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default TodoApp;
