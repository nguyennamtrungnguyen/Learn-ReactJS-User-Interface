import React from "react";
import useWarehouse from "../../hooks/useWarehouse";

export default function WarehouseCard({ warehouse }) {
  const { deleteWarehouse } = useWarehouse();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-orange-600 mb-2">
        {warehouse.name}
      </h2>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Loại kho:</span> {warehouse.type}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Địa điểm:</span> {warehouse.location}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Người quản lý:</span> {warehouse.manager}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Liên hệ:</span> {warehouse.contact}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-medium">Ngày tạo:</span>{" "}
        {new Date(warehouse.createdAt * 1000).toLocaleDateString("vi-VN")}
      </p>
      <div className="mt-4 flex flex-row justify-between">
        <button className="py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-1/3">
          Xem chi tiết
        </button>
        <button
          className="py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg w-1/3"
          onClick={() => deleteWarehouse(warehouse.id)}
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
