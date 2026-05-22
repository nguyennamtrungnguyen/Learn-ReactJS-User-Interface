import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border-2 border-lime-500 rounded-lg px-2 py-4">
      <h3 className="text-center font-semibold text-green-500 text-lg">
        {product.name}
      </h3>
      <p>Giá tiền: {product.price} VND</p>
      <p>Mô tả: {product.description}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full bg-green-500 text-center font-bold py-2 mt-2 text-white rounded-lg hover:bg-green-600"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductCard;
