import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialValue,

  reducers: {
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;

      const order = state.orders.find((item) => item.id === id);

      if (order) {
        order.status = status;
      }

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
      const localData = JSON.parse(localStorage.getItem("orders") || "[]");

      // nếu local có data
      if (localData.length > 0) {
        return localData;
      }

      // fetch lần đầu
      const res = await fetch("/data/order.json");
      const data = await res.json();

      // lưu local
      localStorage.setItem("orders", JSON.stringify(data));

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const { updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
