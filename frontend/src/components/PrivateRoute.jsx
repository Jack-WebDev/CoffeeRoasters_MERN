import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoute = () => {
  const { client } = useAuthContext();

  return client ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
