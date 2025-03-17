import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        ()=>{
            const user = localStorage.getItem("user");
            return user ? JSON.parse(user) : null;
        }
    );
    const [token, setToken] = useState(
        ()=>{
            const token = localStorage.getItem("token");
            return token ? JSON.parse(token) : null;
        }
    );
    const [isAuthenticated, setIsAuthenticated] = useState(
        ()=>token?true:false
        
        
    );
    
    const [authError, setAuthError] = useState(null);

    const login = (userData) => {
        setUser(userData)
        setToken(token);
        setIsAuthenticated(true);
        //Guardo en el localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", JSON.stringify(token));
        setAuthError(false)
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setAuthError(false);
    };
    
        const value={
            user,
            token,
            isAuthenticated,
            authError,
            setAuthError,
            login,
            logout
        }

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
    


