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
      navigate("/orders");
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Đăng nhập
        </h1>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600">
          Đăng nhập
        </button>

        <p className="text-center text-sm text-gray-500">
          Tài khoản: admin / 123456
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
