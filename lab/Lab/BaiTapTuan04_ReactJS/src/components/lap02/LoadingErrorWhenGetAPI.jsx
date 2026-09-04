import React, { useEffect, useState } from "react";

const LoadingErrorWhenGetAPI = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(loading);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Lỗi khi load dữ liệu lên màn hình!");
      }
    };

    getApi();
  }, []);

  if (loading)
    return <p style={{ color: "blue", fontWeight: "bold" }}>Loading....</p>;
  if (error)
    return <p style={{ color: "red", fontWeight: "bold" }}>{error}....</p>;

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p style={{ color: "red" }}>Name: {user.name}</p>
            <p style={{ color: "blue" }}>email: {user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingErrorWhenGetAPI;
