import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import deliveryOrderReducer from "./deliveryOrderSlice";

// "items": [
//         { "id": 1, "name": "Áo Thun Cotton", "price": 120000, "quantity": 1 },
//         { "id": 5, "name": "Giày Sneakers", "price": 350000, "quantity": 1 }
//       ]

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    deliveryOrders: deliveryOrderReducer,
  },
});

export default store;
