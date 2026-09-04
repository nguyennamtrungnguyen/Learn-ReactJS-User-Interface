import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./feature/store";
import { RouterProvider } from "react-router-dom";

function App() {
  const handleTest = () => {
    toast.success("Hello ban");
  };
  return (
    <>
      <Provider store="">
        <RouterProvider router="" />
        <ToastContainer position="top-right" autoClose={2000} />
      </Provider>
    </>
  );
}

export default App;
