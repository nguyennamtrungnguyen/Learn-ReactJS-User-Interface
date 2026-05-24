import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./router/AppRouter";
import { store } from "./feature/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={2000} />
      </Provider>
    </>
  );
}

export default App;
