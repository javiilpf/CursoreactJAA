import { Navigate } from "react-router-dom";
import { useAuth} from "./AuthContext";

export const ProtectedRoute=({ children })=>{
    const {isAuthenticated, loading}=useAuth();
    if(!isAuthenticated){
        loading(true);
        <Navigate to="/login"/>
    }else{
        return children;
    }
}