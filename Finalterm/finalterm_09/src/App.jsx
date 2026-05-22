import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import WarehousePage from "./pages/warehouse-page/WarehousePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/warehouse", element: <WarehousePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
