import { useReducer, useState } from "react";
import { todoReducer, initialState } from "./TodoReducers";

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div className="p-5 border">
      <h2 className="text-xl font-bold mb-2">Todo App</h2>

      <input
        className="border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "ADD", payload: input });
            setInput("");
          }
        }}
      />

      <button
        className="bg-blue-500 text-white px-3 ml-2"
        onClick={() => {
          dispatch({ type: "ADD", payload: input });
          setInput("");
        }}
      >
        Add
      </button>

      <ul className="mt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <span
              className={
                todo.completed
                  ? "line-through cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.text}
            </span>

            <button
              className="text-red-500"
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
