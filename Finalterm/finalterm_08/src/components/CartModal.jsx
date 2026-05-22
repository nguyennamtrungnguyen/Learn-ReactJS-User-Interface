import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cartSlice";

export default function CartModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96 p-4">
        <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>
        <ul className="max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <li className="text-center text-gray-500">Chưa có sản phẩm</li>
          ) : (
            items.map(({ product, amount }) => (
              <li
                key={product.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">Số lượng: {amount}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => dispatch(removeItem(product.id))}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    −
                  </button>
                  <button
                    onClick={() => dispatch(addItem(product))}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    ＋
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
