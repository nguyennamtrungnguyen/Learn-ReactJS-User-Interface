import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteOrder,
  fetchOrder,
  updateStatusOrder,
} from "../feature/orderSlice";
import { useOrders } from "../hook/useOrders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [status, setStatus] = useState("All");

  const { orders, loading, error } = useOrders(status);

  const [showForm, setShowForm] = useState(false);

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
      updateStatusOrder({
        id: order.id,
        status: newStatus,
      }),
    );

    toast.success("Cập nhập trạng thái thành công!");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p className="font-bold text-5xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-5xl">{error}</p>;
  return (
    <div className="mx-20">
      <div className="flex w-full justify-between border-b-2 p-10">
        <h1 className="font-bold text-3xl text-blue-500">Danh Sách Đơn Hàng</h1>
        <button
          onClick={handleLogout}
          className="w-[100px] bg-red-500 hover:bg-red-800 cursor-pointer p-2 rounded-2xl text-white"
        >
          Đăng xuất
        </button>
      </div>
      <div className="mb-5 flex justify-between">
        <select
          className="border-2 rounded-xl px-4 py-1 mt-5"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 hover:bg-green-800 cursor-pointer px-4 py-1 mt-5 rounded-2xl text-white"
        >
          + Đơn Hàng
        </button>
      </div>
      {showForm && <OrderForm onClose={() => setShowForm(false)} />}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Mã đơn</th>
            <th className="p-3 border">Khách hàng</th>
            <th className="p-3 border">Sản phẩm</th>
            <th className="p-3 border">Trạng thái</th>
            <th className="p-3 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <th className="border p-2">{order.id}</th>
              <th className="border p-2">{order.customer}</th>
              <th className="border p-2">{order.product}</th>
              <th className="border p-2 text-blue-500">{order.status}</th>
              <th className="border p-2">
                <div className="flex justify-between">
                  <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="bg-blue-500 hover:bg-blue-800 cursor-pointer p-2 rounded-2xl text-white"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(order)}
                    className="bg-yellow-500 hover:bg-yellow-800 cursor-pointer p-2 rounded-2xl text-white"
                  >
                    Cập nhập trạng thái
                  </button>{" "}
                  <button
                    onClick={() => dispatch(deleteOrder(order.id))}
                    className="px-5 bg-red-500 hover:bg-red-800 cursor-pointer p-2 rounded-2xl text-white"
                  >
                    Xóa
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      {orders.length === 0 && (
        <p className="text-center font-bold text-3xl">Không có đơn hàng nào</p>
      )}
    </div>
  );
};

export default OrderPage;
