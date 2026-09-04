export const initialState = {
  cart: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const exist = state.cart.find((p) => p.id === action.payload.id);
      if (exist) {
        return {
          cart: state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p,
          ),
        };
      }
      return {
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE":
      return {
        cart: state.cart.filter((p) => p.id !== action.payload),
      };

    case "INCREASE":
      return {
        cart: state.cart.map((p) =>
          p.id === action.payload ? { ...p, qty: p.qty + 1 } : p,
        ),
      };

    case "DECREASE":
      return {
        cart: state.cart.map((p) =>
          p.id === action.payload && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p,
        ),
      };

    default:
      return state;
  }
}
