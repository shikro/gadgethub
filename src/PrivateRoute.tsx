import React from "react";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "./context/AuthContext";

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();

  if (user != null) {
    return element;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
