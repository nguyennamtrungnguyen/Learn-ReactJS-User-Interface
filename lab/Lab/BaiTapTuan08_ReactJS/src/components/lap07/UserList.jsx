import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/UserState";

const UserList = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUser((prev) => ({ ...prev, loading: true, error: null }));

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUser({
          data: data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setUser({
          data: [],
          loading: false,
          error: "Lỗi khi tải dữ liệu",
        });
      }
    };

    fetchUsers();
  }, []);

  // UI
  if (user.loading) return <h3>Loading...</h3>;
  if (user.error) return <h3>{user.error}</h3>;
  return (
    <div>
      <h2>Danh sách Users</h2>
      {user.data.map((u) => (
        <div key={u.id}>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
};

export default UserList;
