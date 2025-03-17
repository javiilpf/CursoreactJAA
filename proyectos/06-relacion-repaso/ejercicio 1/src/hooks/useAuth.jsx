import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth debe estar dentro de un AuthProvider")
    }
    
    const {
        user,
        token,
        isAuthenticated,
        authError,
        setAuthError,
        login,
        logout
    } = context;

    const registerUser = async (userData) => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                setAuthError(data.message);
                return;
            }

            return data;
        } catch (error) {
            setAuthError("Error al registrar usuario");
        }
    };

    const loginUser = async (credentials) => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (!response.ok) {
                setAuthError(data.message);
                return;
            }

            login(data.user, data.token);
            return data;
        } catch (error) {
            setAuthError("Error al iniciar sesión");
        }
    };

    return {
        user,
        token,
        isAuthenticated,
        authError,
        registerUser,
        loginUser,
        logout
    };
};