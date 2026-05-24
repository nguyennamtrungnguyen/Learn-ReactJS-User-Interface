import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailPage = () => {
  const { orders } = useSelector((state) => state.order);
  const { id } = useParams();
  const navigate = useNavigate();
  const order = orders.find((item) => item.id == id);
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-blue-100">
      <form className="flex flex-col w-[500px] h[500px] bg-white rounded-2xl shadow-2xl p-8 text-xl space-y-6">
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Chi tiết đơn hàng {order.id}
        </h1>

        <p><b>Mã đơn hàng: </b>{order.id}</p>
        <p><b>Khách hàng: </b>{order.customer}</p>
        <p><b>Địa chỉ: </b>{order.address}</p>
        <p><b>Số điện thoại: </b>{order.phone}</p>
        <p><b>Đơn hàng: </b>{order.product}</p>
        <p><b>Trạng thái: </b>{order.status}</p>
        <button
          onClick={() => navigate("/orders")}
          className="w-full rounded-2xl px2 bg-gray-500 hover:bg-gray-800 cursor-pointer p-2 text-white"
        >
          Quay lại
        </button>
      </form>
    </div>
  );
};

export default OrderDetailPage;
