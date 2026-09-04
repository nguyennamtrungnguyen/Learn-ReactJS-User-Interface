import React, { useState } from "react";
import { TodoState } from "../../recoil/TodoState";
import { useRecoilState } from "recoil";

const TodoItem = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(TodoState);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleUpdate = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, text: newText } : t)),
    );
    setIsEditing(false);
  };
  return (
    <div style={{ marginTop: "10px" }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Lưu</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Sửa</button>
          <button onClick={handleDelete}>Xóa</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
