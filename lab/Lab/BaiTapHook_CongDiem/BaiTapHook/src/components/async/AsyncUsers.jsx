import React, { useState } from "react";
import "./AsyncUsers.css";

const AsyncUsers = () => {
  // HOOK useState:
  // - users: state lưu dữ liệu người dùng lấy từ API
  // - setUsers: hàm cập nhật state
  // - []: trạng thái ban đầu (chưa có dữ liệu)
  const [users, setUsers] = useState([]);

  // async function:
  // dùng để xử lý bất đồng bộ (gọi API)
  const loadWithAsync = async () => {
    try {
      // fetch: gọi API
      // await: chờ server trả response
      const response = await fetch(
        "https://698318939c3efeb892a462c2.mockapi.io/users",
      );

      // Chuyển response sang JSON (dữ liệu thực tế)
      // await: chờ parse xong dữ liệu
      const data = await response.json();

      // setUsers:
      // - cập nhật state users
      // - React sẽ render lại component
      setUsers(data);
    } catch {
      // Bắt lỗi khi gọi API (mất mạng, API lỗi...)
      alert("Lỗi khi tải dữ liệu!");
    }
  };

  return (
    <div className="card">
      <h3>Async / Await</h3>

      {/* Click button → gọi loadWithAsync → gọi API */}
      <button onClick={loadWithAsync}>Load với Async/Await</button>

      <ul>
        {/* Render dữ liệu dựa trên state users */}
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong>
            <br />
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncUsers;
