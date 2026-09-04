import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const totalPriceState = selector({
  key: "totalPriceState",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
});