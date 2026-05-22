import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productsSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
