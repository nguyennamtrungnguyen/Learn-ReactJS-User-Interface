import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./feature/store";
import { router } from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={2000} />
      </Provider>
    </div>
  );
}

export default App;
