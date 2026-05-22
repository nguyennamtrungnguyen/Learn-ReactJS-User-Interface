import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ===============================================
// Slice
// ==============================================

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
    // Nhan 3 trang thai
    // PENDING: ham moi duoc goi va dang load
    // FULLFILLED: Ham chay thanh cong
    // Rejected: hm chay that bai
    builder
      .addCase(fetchWarehouse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //   sau khi chay xong tra ve cai list
      .addCase(fetchWarehouse.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      //   truong hop that bai
      .addCase(fetchWarehouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ===============================================
// async thunk (co 2 tham so la ten va ham)
// ==============================================

// get data
export const fetchWarehouse = createAsyncThunk(
  "warehouse/fetchWarehouse",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:731/warehouses")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

// ===============================================
// export
// ==============================================
export default warehouseSlice.reducer;
