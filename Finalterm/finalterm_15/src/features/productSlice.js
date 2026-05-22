import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export default productSlice.reducer;
