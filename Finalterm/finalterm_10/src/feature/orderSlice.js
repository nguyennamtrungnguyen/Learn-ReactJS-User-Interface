import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialValue,
  reducers: {
    // them
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    // sua
    updateOrder: (state, action) => {
      const { id } = action.payload;
      const index = state.orders.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.orders[index] = action.payload;
      }

      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    // sua trang thai
    updateStatusOrder: (state, action) => {
      const { id, status } = action.payload;
      const order = state.orders.find((item) => item.id === id);

      if (order) {
        order.status = status;
      }

      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    // xoa don hang
    deleteOrder: (state, action) => {
      const id = action.payload;

      state.orders = state.orders.filter((item) => item.id !== id);

      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const fetchOrder = createAsyncThunk(
  "orderSlice/fetchOrder",
  async (_, { rejectWithValue }) => {
    try {
      const localData = localStorage.getItem("orders");

      if (localData) {
        if (localData) {
          return JSON.parse(localData);
        }
      }

      const res = await fetch("/public/data/order.json");
      const data = await res.json();

      localStorage.setItem("orders", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const { addOrder, updateOrder, updateStatusOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
