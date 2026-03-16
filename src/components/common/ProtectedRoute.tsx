import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
