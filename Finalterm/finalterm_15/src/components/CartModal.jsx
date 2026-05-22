import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed bg-black/50 inset-0 flex justify-center items-center">
      <div className="w-1/3 bg-white rounded-lg py-2 px-1">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-green-500">Giỏ Hàng</h3>
          <button
            onClick={onClose}
            className="text-xl bg-red-500 font-bold text-white p-1 hover:bg-red-600"
          >
            X
          </button>
        </div>

        <div className="my-4 px-4 space-y-4 max-h-[500px] overflow-y-auto">
          {items.map((x) => (
            <div className="border-b-2">
              <p>Tên hàng hóa: {x.name}</p>
              <p>Giá tiền: {x.price} VND</p>
              <p>Số lượng: {x.quantity}</p>
              <div className="my-2 justify-evenly items-center flex ">
                <button
                  className="bg-green-500 w-1/3 hover:bg-green-600 rounded-lg px-2 py-1 text-white font-bold"
                  onClick={() => dispatch(addToCart(x))}
                >
                  Thêm
                </button>
                <button
                  className="bg-red-500 w-1/3 hover:bg-red-600 rounded-lg px-2 py-1 text-white font-bold"
                  onClick={() => dispatch(removeFromCart(x.id))}
                >
                  Bớt
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <button
            onClick={() => {
              navigate("/checkout");
              onClose();
            }}
            className="bg-orange-500 w-full hover:bg-orange-600 rounded-lg px-2 py-1 text-white font-bold"
          >
            Thanh toán ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default CartModal;
