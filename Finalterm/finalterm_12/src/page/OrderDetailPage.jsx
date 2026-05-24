import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailPage = () => {
  const { orders } = useSelector((state) => state.order);
  const { id } = useParams();
  const navigate = useNavigate();

  const order = orders.find((item) => item.id == id);
  return (
    <div>
      <div className="">
        <h1>Chi tiết đơn hàng {order.id}</h1>
        <p>Mã đơn: {order.id}</p>
        <p>Khách hàng: {order.customer}</p>
        <p>Địa chỉ: {order.address}</p>
        <p>Số điện thoại: {order.phone}</p>
        <p>Sản phẩm: {order.product}</p>
        <p>Trạng thái: {order.status}</p>
      </div>

      <button onClick={() => navigate("/orders")}>Quay lại</button>
    </div>
  );
};
export default OrderDetailPage;
