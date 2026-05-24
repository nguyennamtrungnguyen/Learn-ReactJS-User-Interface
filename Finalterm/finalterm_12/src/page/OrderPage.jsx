import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../hook/useOrders";
import { fetchOrder, updateStatusOrder } from "../feature/orderSlice";
import { toast } from "react-toastify";

const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("All");

  const { orders, loading, error } = useOrders(status);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleUpdateStatus = (order) => {
    let newStatus = "pending";

    if (order.status === "pending") {
      newStatus = " shipping";
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

  return (
    <div>
      <div className="flex justify-between p-10">
        <h1>Danh Sách Đơn Hàng</h1>
        <button className="bg-red-500 text-white" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
      <hr />
      <div className="mt-5">
        <select name="status" value={status} id="">
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <hr />
      <table className="w-full">
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Khách hàng</th>
            <th>Sản phẩm</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <th>{order.id}</th>
              <th>{order.customer}</th>
              <th>{order.product}</th>
              <th>{order.status}</th>
              <th>
                <button onClick={() => navigate(`/orders/${order.id}`)}>
                  Xem chi tiết
                </button>
                <button
                  onClick={() => {
                    handleUpdateStatus(order);
                  }}
                >
                  Cập nhập trạng thái
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length < 1 && <p>Không có đơn hàng nào</p>}
    </div>
  );
};

export default OrderPage;
