import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../../recoil/LoginStata";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(LoginState);

  const handleLogin = () => {
    if (!username && !password) {
      alert("Vui lòng nhập username và password");
      return;
    }
    setUser({ username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <h2>Login</h2>
      <input
        style={{ width: "80%", marginBottom: "10px" }}
        type="text"
        placeholder="Nhập username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ width: "80%", marginBottom: "10px" }}
        type="text"
        placeholder="Nhập password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
