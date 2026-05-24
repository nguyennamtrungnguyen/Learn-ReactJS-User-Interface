import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      toast.success("Đăng nhập thành công");
      navigate("/orders");
    } else {
      toast.error("Đăng nhập thất bại! Sai username hoặc password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="w-[350px] h-[450px] bg-white p-8 rounded-xl shadow-md"
      >
        <h1 className="font-bold text-2xl mb-6 text-center">Đăng nhập</h1>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Nhập username:
          </label>
          <input
            ref={inputRef}
            type="text"
            value={form.username}
            onChange={handleChange}
            name="username"
            className="border w-full p-2 rounded"
            placeholder="admin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Nhập Password:
          </label>
          <input
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            className="border w-full p-2 rounded"
            placeholder="123456"
          />
        </div>
        <p>Tài khoản test: admin | 123456</p>
        <button className="w-full bg-blue-500 hover:bg-blue-800 cursor-pointer p-2 rounded-2xl text-white mt-20">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
