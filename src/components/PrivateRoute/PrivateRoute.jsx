import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const PrivateRoute = () => {
  let { user } = useAuth();
  const location = useLocation();

  if (user === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};
