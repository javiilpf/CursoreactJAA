import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
const url = import.meta.env.VITE_API_URL;


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        ()=>{
          const user = localStorage.getItem('user');
         return user ? JSON.parse(user) : null;
        }
      )
    const [token, setToken] = useState(() => {
      const token = localStorage.getItem("token");
      return token ? JSON.parse(token) : null;
    });
    
    const [isAuthenticated, setIsAuthenticated] = useState(
      ()=> token ? true : false
    )
    
    

    const login = async(dataLogin) => {
      try{
        const response=await fetch(`${url}/api/auth/login`, {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(dataLogin)
      })
      if(!response.ok){
        console.error("Error en el login")
      }
      const data=response.json();
      setIsAuthenticated(true);
      setUser(data.user)
      setToken(data.token)
    }catch(e){
      console.error("Error en el login", e)
    }
    }

      
    
      
    return (
        <AuthContext.Provider value={{login, token, user, isAuthenticated}}>{children}</AuthContext.Provider>
    )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
  }
  return context;
};
