// components/WarehouseForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWarehouse } from "../../features/warehouseSlice";

export default function WarehouseForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    manager: "",
    contact: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    dispatch(
      addWarehouse({
        ...form,
        createdAt: Date.now(),
      })
    );
    setForm({ name: "", location: "", type: "", manager: "", contact: "" });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-lg shadow space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên kho</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-orange-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Loại kho</label>
          <input
            name="type"
            value={form.type}
            onChange={onChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-orange-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Địa chỉ</label>
          <input
            name="location"
            value={form.location}
            onChange={onChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-orange-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quản lý</label>
          <input
            name="manager"
            value={form.manager}
            onChange={onChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-orange-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Liên hệ</label>
        <input
          name="contact"
          value={form.contact}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-orange-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
      >
        Thêm kho
      </button>
    </form>
  );
}
