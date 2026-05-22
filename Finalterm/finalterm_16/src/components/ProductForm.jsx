// ProductForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productsSlice";

export default function ProductForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...form,
        price: parseFloat(form.price),
      })
    );
    setForm({ id: "", title: "", category: "", price: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
      >
        Submit
      </button>
    </form>
  );
}
