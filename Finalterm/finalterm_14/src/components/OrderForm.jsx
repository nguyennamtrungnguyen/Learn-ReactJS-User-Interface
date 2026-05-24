import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrder } from "../feature/orderSlice";

const OrderForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: Number,
    customer: "",
    address: "",
    phone: "",
    product: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.id ||
      !form.customer ||
      !form.address ||
      !form.phone ||
      !form.product ||
      !form.status
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    dispatch(addOrder(form));
    toast.success("Thêm đơn hàng thành công");
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full h[500px] bg-white rounded-2xl shadow-2xl p-8 text-xl items-center"
    >
      <h1 className="text-center text-3xl font-bold text-blue-500">
        Thêm Đơn hàng
      </h1>
      <div className="flex fle-row mx-3 w-full space-x-3">
        <div className="w-1/2">
          <div className="my-5 flex flex-col">
            <label htmlFor="">Nhập mã đơn hàng</label>
            <input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              id=""
              className="border p-2 rounded-2xl"
            />
          </div>
          {/* id: Number, customer: "", address: "", phone: "", product: "", status:
      "pending", */}
          <div className="my-5 flex flex-col">
            <label htmlFor="">Nhập tên khách hàng</label>
            <input
              type="text"
              name="customer"
              value={form.customer}
              onChange={handleChange}
              id=""
              className="border p-2 rounded-2xl"
            />
          </div>
          <div className="my-5 flex flex-col">
            <label htmlFor="">Nhập địa chỉ</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              id=""
              className="border p-2 rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="my-5 flex flex-col">
            <label htmlFor="">Nhập số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              id=""
              className="border p-2 rounded-2xl"
            />
          </div>
          {/* id: Number, customer: "", address: "", phone: "", product: "", status:
      "pending", */}
          <div className="my-5 flex flex-col">
            <label htmlFor="">Nhập tên sản phẩm</label>
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={handleChange}
              id=""
              className="border p-2 rounded-2xl"
            />
          </div>
          <div className="my-5 flex flex-col">
            <label htmlFor="">Chọn trạng thái</label>
            <select
              className="border rounded-2xl px-4 py-1 bg-gray-100"
              value={status}
              onChange={(e) => e.target.value}
            >
              <option value="pending">Pending</option>
              <option value="shipping">Shipping</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={() => onClose()}
          className="w-1/3 rounded-2xl px2 bg-red-500 hover:bg-red-800 cursor-pointer p-2 text-white"
        >
          Hủy & Đóng form
        </button>
        <button
          type="submit"
          className="w-1/3 rounded-2xl px2 bg-blue-500 hover:bg-blue-800 cursor-pointer p-2 text-white"
        >
          Thêm
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
