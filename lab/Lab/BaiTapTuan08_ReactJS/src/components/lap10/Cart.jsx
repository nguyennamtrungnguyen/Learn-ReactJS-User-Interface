import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, totalPriceState } from "../recoil/CartState";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(totalPriceState);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          <span>{item.title}</span>
          <span>x{item.quantity}</span>
        </div>
      ))}

      <h3>Total: {total}$</h3>
    </div>
  );
};

export default Cart;
