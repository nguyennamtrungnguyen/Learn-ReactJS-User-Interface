import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlick";
export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
