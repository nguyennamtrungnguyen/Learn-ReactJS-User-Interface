import React from "react";
import "./LoginForm.css";
const LoginForm = ({ isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? "active" : ""}`}>
      <div className="login-form">
        <span className="close-btn" onClick={onClose}>
          ×
        </span>

        <h2>Đăng nhập</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
