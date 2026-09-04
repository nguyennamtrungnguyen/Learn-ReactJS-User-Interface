import React from "react";
import "./Todo.css";
const TodoItem = ({ todo, onDelete, onToggle }) => {
  console.log("render item", todo.id);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span className={todo.done ? "done" : ""}>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        X
      </button>
    </div>
  );
};

export default React.memo(TodoItem);
