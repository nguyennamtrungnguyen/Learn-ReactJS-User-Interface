import React, { useReducer } from "react";
import { fetchUsersReducer, initialState } from "./fetchUsersReducer";

const FetchUsersApp = () => {
  const [state, dispatch] = useReducer(fetchUsersReducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };

  return (
    <div className="fetch-container">
      <h1>Fetch Users</h1>

      {/* IDLE */}
      {state.status === "idle" && (
        <button onClick={fetchUsers}>Load Users</button>
      )}

      {/* LOADING */}
      {state.status === "loading" && <p>Loading...</p>}

      {/* ERROR */}
      {state.status === "error" && (
        <div>
          <p style={{ color: "red" }}>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {/* SUCCESS */}
      {state.status === "success" && (
        <ul>
          {state.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchUsersApp;
