import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    jwtDecode(token); // Check if token is valid
    return children;
  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
