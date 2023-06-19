import React from "react";
import { Navigate } from "react-router-dom";
export default function Protected({ children }) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
