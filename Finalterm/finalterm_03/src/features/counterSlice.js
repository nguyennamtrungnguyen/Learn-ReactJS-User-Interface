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
      // action (type: "counter/reset")
      state.value = 0;
    },

    increment: (state, action) => {
      state.value += action.payload;
      // action (type: "counter/increment, payload: 10")
    },

    decrement: (state, action) => {
      // action (type: "counter/decrement, payload: 10")

      state.value -= action.payload;
    },
  },
});

export const { reset, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
