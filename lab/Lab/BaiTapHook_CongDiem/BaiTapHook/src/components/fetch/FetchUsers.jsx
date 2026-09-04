import React, { useState } from "react";
import "./FetchUsers.css";

const FetchUsers = () => {
  // HOOK useState:
  // - users: state lưu danh sách người dùng lấy từ API
  // - setUsers: hàm cập nhật state
  // - []: trạng thái ban đầu (chưa có dữ liệu)
  const [users, setUsers] = useState([]);

  // Hàm fetchData:
  // dùng Fetch API để gọi dữ liệu theo cơ chế Promise
  const fetchData = () => {
    fetch("https://698318939c3efeb892a462c2.mockapi.io/users")
      // then đầu tiên:
      // nhận response từ server
      // res.json(): chuyển response sang JSON
      .then((res) => res.json())

      // then thứ hai:
      // data là dữ liệu JSON đã parse
      // setUsers(data) → cập nhật state → render lại UI
      .then((data) => setUsers(data))

      // catch:
      // xử lý lỗi khi gọi API (mạng lỗi, server lỗi...)
      .catch(() => alert("Lỗi khi tải dữ liệu!"));
  };

  return (
    <div className="card">
      <h3>Fetch API</h3>

      {/* Click button → gọi fetchData → gọi API */}
      <button onClick={fetchData}>Load Users</button>

      <ul>
        {/* Render danh sách dựa trên state users */}
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

export default FetchUsers;
