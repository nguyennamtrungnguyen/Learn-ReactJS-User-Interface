import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import OrderPage from "../page/OrderPage";
import OrderDetailPage from "../page/OrderDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/orders" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <OrderPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders/:id",
    element: (
      <ProtectedRoute>
        <OrderDetailPage />
      </ProtectedRoute>
    ),
  },
]);
