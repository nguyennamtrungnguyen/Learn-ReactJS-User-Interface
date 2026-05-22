import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // removeProduct
      .addCase(removeProduct.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (x) => x.id !== action.payload.id
        );
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addProduct
      .addCase(addProduct.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // updateProduct
      .addCase(updateProduct.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((x) =>
          x.id === action.payload.id ? action.payload : x
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (_, { rejectWithValue }) => {
    return await fetch("https://683093056205ab0d6c39a466.mockapi.io/products")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const removeProduct = createAsyncThunk(
  "productsSlice/removeProduct",
  async (id, { rejectWithValue }) => {
    return await fetch(
      `https://683093056205ab0d6c39a466.mockapi.io/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const addProduct = createAsyncThunk(
  "productsSlice/addProduct",
  async (product, { rejectWithValue }) => {
    return await fetch(`https://683093056205ab0d6c39a466.mockapi.io/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const updateProduct = createAsyncThunk(
  "productsSlice/updateProduct",
  async ({ id, product }, { rejectWithValue }) => {
    return await fetch(
      `https://683093056205ab0d6c39a466.mockapi.io/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const { reducerName } = productsSlice.actions;

export default productsSlice.reducer;
