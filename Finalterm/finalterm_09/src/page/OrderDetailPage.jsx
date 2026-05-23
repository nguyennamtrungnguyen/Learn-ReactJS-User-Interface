import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { orders } = useSelector((state) => state.order);

  const order = orders.find((item) => item.id == id);

  return (
    <div className="p-8">
      <div className="border p-6 rounded-xl space-y-3">
        <h1 className="text-2xl font-bold">Chi tiết đơn hàng</h1>

        <p>Mã đơn: {order.id}</p>

        <p>Khách hàng: {order.customer}</p>

        <p>Số điện thoại: {order.phone}</p>

        <p>Địa chỉ: {order.address}</p>

        <p>Sản phẩm: {order.product}</p>

        <p>Trạng thái: {order.status}</p>

        <button
          onClick={() => navigate("/orders")}
          className="bg-gray-700 text-white px-4 py-2 rounded-xl"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default OrderDetailPage;
