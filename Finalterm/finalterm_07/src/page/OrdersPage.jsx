import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchOrder, updateOrderStatus } from "../feature/orderSlice";
import { useOrders } from "../hook/useOrders";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState("All");

  const { filteredOrders, isLoading, error } = useOrders(statusFilter);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleUpdateStatus = (order) => {
    let newStatus = "Pending";

    if (order.status === "Pending") {
      newStatus = "Shipping";
    } else if (order.status === "Shipping") {
      newStatus = "Delivered";
    } else {
      newStatus = "Pending";
    }

    dispatch(
      updateOrderStatus({
        id: order.id,
        status: newStatus,
      }),
    );

    toast.success("Cập nhật trạng thái thành công");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Đăng xuất thành công");
    navigate("/login");
  };

  if (isLoading) {
    return <p className="p-6">Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quản lý đơn hàng</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Đăng xuất
        </button>
      </div>

      <div className="mb-4">
        <label className="font-semibold mr-2">Lọc trạng thái:</label>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipping">Shipping</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
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
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Không có đơn hàng nào
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border p-3">{order.id}</td>
                  <td className="border p-3">{order.customerName}</td>
                  <td className="border p-3">{order.product}</td>
                  <td className="border p-3">{order.status}</td>
                  <td className="border p-3 space-x-2">
                    <button
                      onClick={() => navigate(`/orders/${order.id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Chi tiết
                    </button>

                    <button
                      onClick={() => handleUpdateStatus(order)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Cập nhật trạng thái
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
