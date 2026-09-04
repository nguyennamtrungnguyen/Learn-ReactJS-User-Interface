import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoState } from "../../recoil/TodoState";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(TodoState);

  const handleAdd = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };
  return (
    <div>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
};

export default TodoInput;
