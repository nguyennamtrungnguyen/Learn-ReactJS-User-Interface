import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ===============================
// SLICE
// ===============================
const initialValue = {
  list: [],
  loading: false,
  error: null,
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchWarehouses
      .addCase(fetchWarehouses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWarehouses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchWarehouses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addWarehouse
      .addCase(addWarehouse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWarehouse.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addWarehouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// PENDING: dữ liệu/hàm đang chạy
// FULLFILLED: hàm chạy thành công
// REJECTED: hàm chạy thất bại

// ===============================
// ASYNC THUNK
// ===============================

// fetchWarehouses()
export const fetchWarehouses = createAsyncThunk(
  "warehouse/fetchWarehouses",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/warehouses")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

// addWarehouse({thông tin warehouse})
export const addWarehouse = createAsyncThunk(
  "warehouse/addWarehouse",
  async (newWarehouse, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/warehouses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWarehouse),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

// ===============================
// EXPORT
// ===============================
export default warehouseSlice.reducer;
