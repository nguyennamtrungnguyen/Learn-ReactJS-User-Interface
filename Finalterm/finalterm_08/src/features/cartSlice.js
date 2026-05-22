import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  items: [],
  totalItems: 0,
};

// addItem(item)
// removeItem(itemId)

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addItem(state, action) {
      const prod = action.payload;

      const exist = state.items.find((item) => item.product.id === prod.id);
      if (exist) exist.amount += 1;
      else {
        state.items.push({
          product: prod,
          amount: 1,
        });
      }

      state.totalItems += 1;
    },

    removeItem(state, action) {
      const exist = state.items.find(
        (item) => item.product.id === action.payload
      );

      if (exist) {
        if (exist.amount === 1)
          state.items = state.items.filter(
            (x) => x.product.id !== exist.product.id
          );
        else exist.amount -= 1;
        state.totalItems -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
