import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../hook/useOrders";
import {
  deleteOrder,
  fetchOrder,
  updateStatusOrder,
} from "../feature/orderSlice";
import { toast } from "react-toastify";
import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
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
      updateStatusOrder({
        id: order.id,
        status: newStatus,
      }),
    );

    toast.success("Cập nhập trạng thái đơn hàng thành công");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="p-10">
      <div className="flex justify-between p-10">
        <h1 className="font-bold text-4xl text-blue-500">Danh Sách Đơn Hàng</h1>

        <button
          onClick={handleLogout}
          className="w-[150px] rounded-2xl px2 bg-red-500 hover:bg-red-800 cursor-pointer p-2 text-white"
        >
          Đăng xuất
        </button>
      </div>
      <hr />
      <div className="p-10 flex justify-between">
        <select
          className="border rounded-2xl px-4 py-1 bg-gray-100"
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
          className="w-[150px] rounded-2xl px2 bg-green-500 hover:bg-green-800 cursor-pointer p-2 text-white"
        >
          Thêm đơn hàng
        </button>
      </div>
      <div className="my-10">
        {showForm && <OrderForm onClose={() => setShowForm(false)} />}
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Mã đơn</th>
            <th className="border p-2">Khách hàng</th>
            <th className="border p-2">Sản phẩm</th>
            <th className="border p-2">Trạng Thái</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2 text-center">{order.id}</td>
              <td className="border p-2 text-center">{order.customer}</td>
              <td className="border p-2 text-center">{order.product}</td>
              <td className="border p-2 text-center text-blue-500">
                {order.status}
              </td>
              <td className="border p-2 text-center flex justify-between">
                <button
                  onClick={() => navigate(`/orders/${order.id}`)}
                  className="w-[150px] rounded-2xl px2 bg-blue-500 hover:bg-blue-800 cursor-pointer p-1 text-white"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => dispatch(deleteOrder(order.id))}
                  className="w-[150px] rounded-2xl px2 bg-red-500 hover:bg-red-800 cursor-pointer p-1 text-white"
                >
                  Xóa
                </button>
                <button
                  onClick={() => handleUpdateStatus(order)}
                  className="w-[150px] rounded-2xl px2 bg-yellow-500 hover:bg-yellow-800 cursor-pointer p-1 text-white"
                >
                  Cập nhập trạng thái
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
