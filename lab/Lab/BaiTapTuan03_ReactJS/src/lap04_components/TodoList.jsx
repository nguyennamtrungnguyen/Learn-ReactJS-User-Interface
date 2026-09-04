import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
