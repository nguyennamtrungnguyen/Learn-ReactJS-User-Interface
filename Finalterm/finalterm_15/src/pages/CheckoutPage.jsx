import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeliveryOrder } from "../features/deliveryOrderSlice";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/cartSlice";

const CheckoutPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    total: 0,
    items: [],
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = () => {
    const payload = {
      ...form,
      items,
      total: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    };
    dispatch(createDeliveryOrder(payload));
    dispatch(resetCart());
    navigate("/orders");
  };

  return (
    <>
      <div className="w-1/3 mx-auto my-8">
        <div>
          <label htmlFor="">Tên khách hàng</label>
          <input
            name="customerName"
            type="text"
            className="w-full rounded-lg px-2 py-1 border-2 border-gray-300"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="">Địa chỉ</label>
          <input
            name="address"
            type="text"
            className="w-full rounded-lg px-2 py-1 border-2 border-gray-300"
            onChange={handleOnChange}
          />
        </div>

        <button
          onClick={submit}
          className="bg-orange-500 w-full hover:bg-orange-600 rounded-lg px-2 py-1 text-white font-bold mt-4"
        >
          Thanh toán
        </button>
      </div>
      <div className="my-4 px-4 space-y-4 max-h-[500px] overflow-y-auto">
        {items.map((x) => (
          <div className="border-b-2">
            <p>Tên hàng hóa: {x.name}</p>
            <p>Giá tiền: {x.price} VND</p>
            <p>Số lượng: {x.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutPage;
