import React from "react";

export default function WarehouseCard({ warehouse }) {
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
    </div>
  );
}
