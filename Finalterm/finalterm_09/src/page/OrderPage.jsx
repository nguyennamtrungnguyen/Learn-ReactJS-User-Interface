import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useOrders } from "../hook/useOrders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchOrder, updateOrderStatus } from "./../feature/orderSlice";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState("All");
  const { orders, loading, error } = useOrders(status);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleUpdateStatus = (order) => {
    let newStatus = "pending";
    if (order.status === "pending") {
      newStatus = "shipping";
    } else if (order.status === "shipping") {
      newStatus = "delivered";
    } else {
      newStatus = "pending";
    }

    dispatch(
      updateOrderStatus({
        id: order.id,
        status: newStatus,
      }),
    );

    toast.success("Cập nhập trạng thái thành công");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Danh Sách Đơn Hàng</h1>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
          onClick={handleLogout}
        >
          Đăng xuất
        </button>
      </div>
      <div className="mb-5">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Mã đơn</th>
            <th className="border p-3">Khách hàng</th>
            <th className="border p-3">Sản phẩm</th>
            <th className="border p-3">Trạng thái</th>
            <th className="border p-3">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border">{order.id}</td>
              <td className="border">{order.customer}</td>
              <td className="border">{order.product}</td>
              <td className="border font-semibold text-blue-500">
                {order.status}
              </td>
              <td className="border flex justify-between mx-5">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-xl"
                  onClick={() => navigate(`/orders/${order.id}`)}
                >
                  Xem chi tiết
                </button>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-xl"
                  onClick={() => handleUpdateStatus(order)}
                >
                  Cập nhập trạng thái
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && (
        <p className="text-center mt-5 text-gray-500">
          Không có đơn hàng phù hợp
        </p>
      )}
    </div>
  );
};

export default OrderPage;
