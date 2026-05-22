import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import WarehousePage from "./pages/warehouse-page/WarehousePage";
import { Provider } from "react-redux";
import store from "./features/store";
import WarehouseDetailPage from "./pages/WarehouseDetailsPage";
import WarehouseEditPage from "./pages/WarehouseEditPage";
import WarehouseForm from "./pages/warehouse-page/WarehouseForm";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/warehouse",
        element: <WarehousePage />,
        children: [{ path: "/warehouse/add", element: <WarehouseForm /> }],
      },
      { path: "/warehouse/:id", element: <WarehouseDetailPage /> },
      { path: "/warehouse/edit/:id", element: <WarehouseEditPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
