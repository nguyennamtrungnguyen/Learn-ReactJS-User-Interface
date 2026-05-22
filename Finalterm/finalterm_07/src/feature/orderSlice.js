import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:731/orders";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (_, { rejectWithValue }) => {
    try {
      const localOrders = localStorage.getItem("orders");

      if (localOrders) {
        return JSON.parse(localOrders);
      }

      const res = await fetch(API_URL);

      if (!res.ok) {
        return rejectWithValue("Không thể tải danh sách đơn hàng");
      }

      const data = await res.json();
      localStorage.setItem("orders", JSON.stringify(data));

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialValue = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialValue,
  reducers: {
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;

      const order = state.orders.find((item) => String(item.id) === String(id));

      if (order) {
        order.status = status;
      }

      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
