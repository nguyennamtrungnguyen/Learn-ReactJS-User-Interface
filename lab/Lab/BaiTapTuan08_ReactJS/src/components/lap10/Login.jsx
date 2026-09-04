import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/AuthState";

const Login = () => {
  const setAuth = useSetRecoilState(authState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "admin@gmail.com" && password === "123") {
      setAuth({
        token: "fake-token",
        user: { email },
      });
    } else {
      alert("Sai tài khoản");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
