import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/AuthState";

const Login = () => {
  const setAuth = useSetRecoilState(authState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://697c4082889a1aecfeb1caab.mockapi.io/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username.trim(),
            password: password.trim(),
          }),
        },
      );

      console.log("STATUS:", res.status);

      const data = await res.json();
      console.log("DATA:", data);

      if (data.token) {
        setAuth({
          token: data.token,
          user: { email: username },
        });

        localStorage.setItem("token", data.token);
      } else {
        setError("Sai email hoặc password");
      }
    } catch (err) {
      console.error("ERROR:", err);
      setError("Lỗi server");
    }

    setLoading(false);
  };
  return (
    <div>
      <h2>Login</h2>

      {/* Nút auto fill */}
      <button
        onClick={() => {
          setUsername("Aileen_Kerluke80@yahoo.com");
          setPassword("Ur36JJBagtKUaLV");
        }}
      >
        Điền tài khoản test
      </button>

      <br />
      <br />

      <input
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Đang đăng nhập..." : "Login"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
