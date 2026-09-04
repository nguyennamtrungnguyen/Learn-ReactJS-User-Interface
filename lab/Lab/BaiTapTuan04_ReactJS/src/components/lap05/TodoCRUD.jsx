import React, { useEffect, useState } from "react";

const TodoCRUD = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "https://jsonplaceholder.typicode.com/todos";

  // GET todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);

        const response = await fetch(url + "?_limit=5");
        const data = await response.json();

        setTodos(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Không thể load todos");
      }
    };

    fetchTodos();
  }, []);

  // POST todo
  const addTodo = async () => {
    if (!title) return;

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          completed: false,
        }),
      });

      const data = await response.json();

      setTodos([data, ...todos]);
      setTitle("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Không thể thêm todo");
    }
  };

  // DELETE todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Không thể xóa todo");
    }
  };

  return (
    <div>
      <h2>Todo CRUD</h2>

      <input
        type="text"
        placeholder="Enter todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTodo} disabled={loading}>
        Add Todo
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading && <p>Loading...</p>}

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoCRUD;
