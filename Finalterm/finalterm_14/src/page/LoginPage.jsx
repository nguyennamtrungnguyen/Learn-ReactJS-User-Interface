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
        JSON.stringify({ username: form.username, password: form.password }),
      );

      toast.success("Đăng nhập thành công");
      navigate("/orders");
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] h[500px] bg-white rounded-2xl shadow-2xl p-8 text-xl"
      >
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Đăng nhập
        </h1>
        <div className="my-5 flex flex-col">
          <label htmlFor="">Nhập username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            id=""
            className="border p-2 rounded-2xl"
          />
        </div>
        <div className="my-5 flex flex-col">
          <label htmlFor="">Nhập password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            id=""
            className="border p-2 rounded-2xl"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl px2 bg-blue-500 hover:bg-blue-800 cursor-pointer p-2 text-white"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
