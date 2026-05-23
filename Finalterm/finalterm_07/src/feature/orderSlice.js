import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrder = createAsyncThunk(
  "orderSlice/fetchOrder",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:731/orders");

      if (!res.ok) {
        return rejectWithValue("Lỗi tải danh sách đơn hàng");
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const updateOrderStatus = createAsyncThunk(
  "orderSlice/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:731/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        return rejectWithValue("Lỗi cập nhật trạng thái");
      }

      return await res.json();
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
  reducers: {},
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
      })

      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;

        const index = state.orders.findIndex(
          (order) => String(order.id) === String(updatedOrder.id),
        );

        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }

        localStorage.setItem("orders", JSON.stringify(state.orders));
      });
  },
});

export default orderSlice.reducer;
