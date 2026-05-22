import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function WarehouseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: warehouse, isLoading } = useFetch(
    `http://localhost:3001/warehouses/${id}`
  );

  if (isLoading || !warehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 mt-8 border-2 border-orange-600">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        {warehouse.name}
      </h1>

      <p>
        <span className="font-medium">Loại kho:</span> {warehouse.type}
      </p>
      <p>
        <span className="font-medium">Địa điểm:</span> {warehouse.location}
      </p>
      <p>
        <span className="font-medium">Người quản lý:</span> {warehouse.manager}
      </p>
      <p>
        <span className="font-medium">Liên hệ:</span> {warehouse.contact}
      </p>
      <p>
        <span className="font-medium">Ngày tạo:</span>{" "}
        {new Date(warehouse.createdAt * 1000).toLocaleDateString("vi-VN")}
      </p>

      <div className="mt-6 flex space-x-3">
        <button
          onClick={() => navigate("/warehouse")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Quay lại
        </button>
        <button
          onClick={() => navigate(`/warehouse/edit/${id}`)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Chỉnh sửa
        </button>
      </div>
    </div>
  );
}
