import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { orders } = useSelector((state) => state.order);

  const order = orders.find((item) => item.id == id);
  return (
    <div className="flex w-full justify-center items-center mt-10">
      <div className="bg-blue-100 p-10 rounded-2xl w-[500px] h-[500px] space-y-6 text-xl text-gray-800">
        <h1 className="text-center font-bold text-4xl text-blue-500">
          Chi Tiết Đơn Hàng {order.id}
        </h1>
        <p>
          <b>Mã sản phẩm:</b> {order.id}
        </p>
        <p>
          <b>Khách hàng:</b> {order.customer}
        </p>
        <p>
          <b>Địa chỉ:</b> {order.address}
        </p>
        <p>
          <b>Số điện thoại:</b> {order.phone}
        </p>
        <p>
          <b>Tên sản phẩm:</b> {order.product}
        </p>
        <p>
          <b>Trạng thái:</b> {order.status}
        </p>
        <button
          onClick={() => navigate("/orders")}
          className="w-full bg-gray-500 hover:bg-gray-800 cursor-pointer p-2 rounded-2xl text-white mt-4"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default OrderDetailPage;
