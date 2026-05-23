import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
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
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: form.username,
        }),
      );
      toast.success("Đăng nhập thành công");
      navigate("/task");
    } else {
      toast.error("Sai tài khoản mật khẩu");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <label htmlFor="">Nhap username</label>
          <input
            type="text"
            placeholder="Nhap username"
            name="username"
            className="border-2"
            onChange={handleChange}
            value={form.username}
          />
        </div>

        <div className="flex space-x-3">
          <label htmlFor="">Nhap password</label>
          <input
            type="password"
            placeholder="Nhap password"
            name="password"
            className="border-2"
            onChange={handleChange}
            value={form.password}
          />
        </div>

        <div className="">
          <button
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
