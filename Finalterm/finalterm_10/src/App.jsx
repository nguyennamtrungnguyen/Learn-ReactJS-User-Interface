import { Provider } from "react-redux";
import { store } from "./feature/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
