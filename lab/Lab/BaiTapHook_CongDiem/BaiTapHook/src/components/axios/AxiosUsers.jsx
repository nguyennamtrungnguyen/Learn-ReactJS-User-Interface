import React, { useState } from "react";
import axios from "axios";
import "./AxiosUsers.css";

const AxiosUsers = () => {
  // HOOK useState:
  // - users: state dùng để lưu danh sách người dùng từ API
  // - setUsers: hàm cập nhật state
  // - []: trạng thái ban đầu (chưa có dữ liệu)
  const [users, setUsers] = useState([]);

  // Hàm loadWithAxios:
  // dùng axios để gọi API theo cơ chế Promise
  const loadWithAxios = () => {
    axios
      // axios.get(): gửi request GET lên API
      .get("https://698318939c3efeb892a462c2.mockapi.io/users")

      // then():
      // chạy khi gọi API thành công
      // res.data là dữ liệu JSON server trả về
      // setUsers(res.data) → cập nhật state → render lại UI
      .then((res) => setUsers(res.data))

      // catch():
      // chạy khi gọi API bị lỗi
      .catch(() => alert("Lỗi khi tải dữ liệu!"));
  };

  return (
    <div className="card">
      <h3>Axios</h3>

      {/* Click button → gọi loadWithAxios → gọi API */}
      <button onClick={loadWithAxios}>Load với Axios</button>

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

export default AxiosUsers;
