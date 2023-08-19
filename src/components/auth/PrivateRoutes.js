import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import Loader from "../styledComponents/Loader";

const PrivateRoutes = () => {
  const { isLoading, loggedInUser } = UseAuth();

  if (isLoading) {
    return <Loader />;
  }

  return loggedInUser !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
