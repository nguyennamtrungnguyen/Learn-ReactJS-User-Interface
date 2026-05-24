import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
};
