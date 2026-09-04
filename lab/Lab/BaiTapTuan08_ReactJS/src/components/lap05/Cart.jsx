import React from "react";
import { cartState, totalPriceState } from "../recoil/CartState";
import { useRecoilState, useRecoilValue } from "recoil";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(totalPriceState);

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <div>
      <h2>Giỏ hàng</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}đ x {item.quantity}
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
        </div>
      ))}

      <h3>Tổng tiền: {total}đ</h3>
    </div>
  );
};

export default Cart;
