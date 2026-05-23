import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOrder } from "../feature/orderSlice";

const OrderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orders, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrder());
    }
  }, [dispatch, orders.length]);

  const order = orders.find((item) => String(item.id) === String(id));

  if (isLoading) {
    return <p className="p-6">Đang tải chi tiết...</p>;
  }

  if (!order) {
    return <p className="p-6">Không tìm thấy đơn hàng</p>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        Quay lại
      </button>

      <div className="bg-white shadow rounded-xl p-6 max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Chi tiết đơn hàng</h1>

        <p>
          <b>Tên khách hàng:</b> {order.customer}
        </p>

        <p>
          <b>Số điện thoại:</b> {order.phone}
        </p>

        <p>
          <b>Địa chỉ:</b> {order.address}
        </p>

        <p>
          <b>Sản phẩm:</b> {order.product}
        </p>

        <p>
          <b>Trạng thái:</b> {order.status}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailPage;
