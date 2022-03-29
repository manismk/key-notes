import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const PrivateRoute = () => {
  let { user } = useAuth();

  if (user === false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
