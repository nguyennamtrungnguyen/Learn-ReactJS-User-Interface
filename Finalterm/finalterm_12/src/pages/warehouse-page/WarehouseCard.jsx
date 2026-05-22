import React from "react";
import useWarehouse from "../../hooks/useWarehouse";
import { Link } from "react-router-dom";

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

      <div className="mt-4 flex flex-row justify-between">
        <Link
          to={`/warehouse/${warehouse.id}`}
          className="py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-1/3 block text-center"
        >
          Xem chi tiết
        </Link>

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
