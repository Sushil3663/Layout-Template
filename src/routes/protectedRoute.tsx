import { Navigate, Outlet } from "react-router-dom";
interface ProtectedRouteType {
  isAuthenticated: boolean | object;
}
const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteType) => {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
