import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext=createContext();
export const AuthProvider=({ children })=>{
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    const login=()=>{
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated",true);
    }
    const logOut=()=>{
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth=()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}