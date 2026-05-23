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
      localStorage.setItem("isLogin", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      );
      toast.success("Đăng nhập thành công");
      navigate("/orders");
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  return (
    <div className="min-h-screen flex item-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[350px] h-[500px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h1>

        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border w-full p-2 rounded"
            placeholder="admin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border w-full p-2 rounded"
            placeholder="123456"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-800"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
