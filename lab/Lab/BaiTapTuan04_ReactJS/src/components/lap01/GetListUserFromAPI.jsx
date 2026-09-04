import React, { useEffect, useState } from "react";

const GetListUserFromAPI = () => {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        console.log("Dữ liệu nhận được", data);
      } catch (error) {
        throw new error(error);
      }
    };

    getApi();
  }, []);

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

export default GetListUserFromAPI;
