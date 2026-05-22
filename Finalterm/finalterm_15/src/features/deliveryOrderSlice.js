import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const deliveryOrderSlice = createSlice({
  name: "deliveryOrderSlice",
  initialState: {
    orders: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) =>
    builder
      // fetchDeliveryOrders
      .addCase(fetchDeliveryOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeliveryOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchDeliveryOrders.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      // createDeliveryOrder
      .addCase(createDeliveryOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeliveryOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createDeliveryOrder.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const fetchDeliveryOrders = createAsyncThunk(
  "productSlice/fetchDeliveryOrders",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/delivery_orders")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const createDeliveryOrder = createAsyncThunk(
  "productSlice/createDeliveryOrder",
  async (cart, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/delivery_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export default deliveryOrderSlice.reducer;
