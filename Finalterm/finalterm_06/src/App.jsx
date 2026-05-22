import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/product-page/ProductPage";
import ProductDetailsPage from "./pages/product-page/product-details-page/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
