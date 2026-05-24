import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteOrder,
  fetchOrder,
  updateStatusOrder,
} from "../feature/orderSlice";
import { toast } from "react-toastify";
import { useOrders } from "../hook/useOrders";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [status, setStatus] = useState("All");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useOrders(status);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleStatus = (order) => {
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
    toast.success("Cập nhập thành công");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p className="text-4xl">Loading...</p>;
  if (error) return <p className="text-4xl text-red-500">{error}</p>;

  return (
    <div className="mx-20">
      <div className="flex justify-between w-full border-b-2 p-10">
        <h1 className="font-bold text-3xl text-blue-500">Danh Sách Đơn Hàng</h1>
        <button
          onClick={handleLogout}
          className="w-[100px] bg-red-500 cursor-pointer hover:bg-red-800 p-2 rounded-2xl text-white"
        >
          Đăng xuất
        </button>
      </div>
      <div className="flex justify-between">
        <select
          className="border-2 rounded-lg px-4 py-1 mt-5"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
        <button className="w-[150px] mt-5 bg-green-500 cursor-pointer hover:bg-green-800 p-2 rounded-2xl text-white">
          + Đơn hàng
        </button>
      </div>
      <table className="w-full border mt-10">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Mã đơn hàng</th>
            <th className="border p-3">Tên khách hàng</th>
            <th className="border p-3">Sản phẩm</th>
            <th className="border p-3">Trạng thái</th>
            <th className="border p-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {loading}
          {!loading &&
            orders.map((order) => (
              <tr key={order.id}>
                {" "}
                <th className="border p-3">{order.id}</th>
                <th className="border p-3">{order.customer}</th>
                <th className="border p-3">{order.product}</th>
                <th className="border p-3">{order.status}</th>
                <th className="border p-3 flex justify-between">
                  <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="p-2 mt-5 bg-blue-500 cursor-pointer hover:bg-blue-800 rounded-2xl text-white"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => dispatch(deleteOrder(order.id))}
                    className="p-2 mt-5 bg-blue-500 cursor-pointer hover:bg-blue-800 rounded-2xl text-white"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => handleStatus(order)}
                    className="p-2 mt-5 bg-yellow-500 cursor-pointer hover:bg-yellow-800  rounded-2xl text-white"
                  >
                    Cập nhập trạng thái
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
