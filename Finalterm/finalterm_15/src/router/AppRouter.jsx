import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/orders",
    element: <Navigate to="/orders" replace />,
  },

  {
    path: "/login",
    element: <Navigate to="/orders" replace />,
  },

  {
    path: "/",
    element: <Navigate to="/orders" replace />,
  },

  {
    path: "/",
    element: <Navigate to="/orders" replace />,
  },
]);
