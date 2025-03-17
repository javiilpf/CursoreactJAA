import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { user, token } = useAuth();
  // const user = JSON.parse(localStorage.getItem("user"));
  // const token = localStorage.getItem("token");
  // if (!token || !user) {
  //   return <Navigate to="/login" />;
    
  // }
  return <>{children}</>
};

export default ProtectedRoute;
