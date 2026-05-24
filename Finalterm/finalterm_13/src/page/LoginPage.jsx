import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === "admin" && form.password === "123456") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({ username: form.username, password: form.password }),
      );
      navigate("/orders");
      toast.success("Đăng nhập thành công");
    } else {
      toast.error("Sai username hoặc mật khẩu");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <div className="">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            ref={inputRef}
            value={form.username}
            name="username"
            onChange={handleChange}
            className="border"
          />
        </div>
        <div className="">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={handleChange}
            className="border"
          />
        </div>
        <button type="submit" className="bg-blue-500">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
