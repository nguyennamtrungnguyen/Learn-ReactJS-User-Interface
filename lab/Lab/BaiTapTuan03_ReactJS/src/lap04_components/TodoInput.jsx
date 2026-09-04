import React, { useState } from "react";
import "./Todo.css";
const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="todo-input-box">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
