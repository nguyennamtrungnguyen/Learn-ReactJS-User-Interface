import React from "react";
import { useRecoilValue } from "recoil";
import { TodoState } from "../../recoil/TodoState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(TodoState);

  return (
    <div>
      <h3>Danh sách Todo</h3>
      {todos.length === 0 && <p>Chưa có todo</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
