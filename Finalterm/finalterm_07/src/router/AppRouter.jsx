import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import OrderDetailPage from "../page/OrderDetailPage";
import OrdersPage from "../page/OrdersPage";

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
        <OrdersPage />
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
