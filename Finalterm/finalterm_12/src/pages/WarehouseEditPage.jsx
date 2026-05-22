// src/pages/warehouse-page/WarehouseEditPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useWarehouse from "../hooks/useWarehouse";

export default function WarehouseEditPage() {
  const { modifyWarehouse } = useWarehouse();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFetch(
    `http://localhost:3001/warehouses/${id}`
  );

  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    manager: "",
    contact: "",
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    modifyWarehouse(form);
    navigate("/warehouse");
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6 mt-8">
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Chỉnh sửa kho</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "type", "location", "manager", "contact"].map((field) => (
          <div key={field}>
            <label className="block font-medium mb-1">
              {field === "name" && "Tên kho"}
              {field === "type" && "Loại kho"}
              {field === "location" && "Địa điểm"}
              {field === "manager" && "Người quản lý"}
              {field === "contact" && "Liên hệ"}
            </label>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}
        <div className="flex space-x-3 mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
