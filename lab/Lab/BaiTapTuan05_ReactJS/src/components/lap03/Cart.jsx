import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { state, dispatch, total } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
  ];

  return (
    <div className="p-5 border">
      <h2 className="text-xl font-bold">Shopping Cart</h2>

      <h3 className="mt-2">Products:</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button
            className="ml-2 bg-green-500 text-white px-2"
            onClick={() => dispatch({ type: "ADD", payload: p })}
          >
            Add
          </button>
        </div>
      ))}

      <h3 className="mt-4">Cart:</h3>
      {state.cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.qty}

          <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
          <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>X</button>
        </div>
      ))}

      <h2 className="mt-3 font-bold">Total: ${total}</h2>
    </div>
  );
}