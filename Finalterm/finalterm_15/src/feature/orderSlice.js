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
    updateStatusOrder: (state, action) => {
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
      const localData = localStorage.getItem("orders");
      if (localData) {
        return JSON.parse(localData);
      }

      const res = await fetch("/data/order.json");
      const data = await res.json();

      localStorage.setItem("orders", JSON.stringify(data));

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const { updateStatusOrder } = orderSlice.actions;
export default orderSlice.reducer;
