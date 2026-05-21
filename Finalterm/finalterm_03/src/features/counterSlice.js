import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  value: 0,
};

// Redux có cho phép sử dụng thư viện Immer
// Thư viện immer cho phép biến đổi (imuate) biến đổi trực tiếp
// Nhưng thực chất dưới background nó vẫn tạo state mới
const counterSlice = createSlice({
  name: "counter",
  initialState: intialValue,
  reducers: {
    reset: (state) => {
      state.value = 0;
    },

    increment: (state, action) => {
      state.value += action.payload;
    },

    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});
