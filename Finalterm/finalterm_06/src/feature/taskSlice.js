import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialValue,
  reducers: {},

  //   extraReducers : builder () => {
  //     builder
  //   }
});

export default taskSlice.reducer;
