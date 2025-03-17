import { createContext, useState, useContext } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  

  const login = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Login fallido");
      }
      const data = await response.json();
      setUser(data.user);
      setToken(data.token);
      setisAuthenticated(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
        credentials: "include", // para que las cookies se guarden en el servidor
      });
      if (!response.ok) {
        return { success: false, message: "El usuario no se ha registrado correctamente" };
      }
      setUser(await response.json());
      setisAuthenticated(true);
      return { success: true, message: "Usuario registrado correctamente" };
      
    } catch (error) {
      console.log("Error en registro", error);
      setError(error);
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return <AuthContext.Provider value={{isAuthenticated, user, error, loading, token, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
  }
  return context;
};

