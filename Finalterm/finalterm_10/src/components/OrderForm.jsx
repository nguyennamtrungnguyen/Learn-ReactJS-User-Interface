import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addOrder } from "../feature/orderSlice";
import { useDispatch } from "react-redux";

const OrderForm = ({ onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [form, setForm] = useState({
    id: "",
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
    <div className="flex items-center justify-center w-full my-10">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 p-8 rounded-xl shadow-md flex flex-col items-center justify-center"
      >
        <h1 className="font-bold text-2xl mb-6 text-center">Thêm Đơn Hàng</h1>
        <div className="w-full flex flex-row space-x-3">
          <div className="flex flex-col w-full">
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Mã đơn hàng
              </label>
              <input
                ref={inputRef}
                type="text"
                value={form.id}
                onChange={handleChange}
                name="id"
                className="border w-full p-2 rounded"
                placeholder=""
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Tên khách hàng
              </label>
              <input
                type="text"
                value={form.customer}
                onChange={handleChange}
                name="customer"
                className="border w-full p-2 rounded"
                placeholder=""
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Địa chỉ
              </label>
              <input
                type="text"
                value={form.address}
                onChange={handleChange}
                name="address"
                className="border w-full p-2 rounded"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Số điện thoại
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                className="border w-full p-2 rounded"
                placeholder=""
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Sản phẩm
              </label>
              <input
                type="text"
                value={form.product}
                onChange={handleChange}
                name="product"
                className="border w-full p-2 rounded"
                placeholder=""
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-1">
                Trạng thái
              </label>
              <select
                type="text"
                value={form.status}
                onChange={handleChange}
                name="status"
                className="border w-full p-2 rounded"
                placeholder=""
              >
                <option value="pending">Pending</option>
                <option value="shipping">Shipping</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-evenly items-center">
          <button
            type="button"
            onClick={onClose}
            className="w-1/3 bg-red-500 hover:bg-red-800 cursor-pointer p-2 rounded-2xl text-white mt-5"
          >
            Hủy & Đóng Form
          </button>
          <button
            type="submit"
            className="w-1/3 bg-blue-500 hover:bg-blue-800 cursor-pointer p-2 rounded-2xl text-white mt-5"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
