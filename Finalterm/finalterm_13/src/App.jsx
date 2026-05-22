import React from "react";
import { Provider } from "react-redux";
import store from "./features/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
