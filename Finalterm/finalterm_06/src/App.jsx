import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import store from "./feature/store";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
