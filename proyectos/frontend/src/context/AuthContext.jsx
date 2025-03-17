import { createContext, useContext, useState } from "react"

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext()

export const AuthProvider = ({children}) => { 
    const [isAuthenticated, setisAuthenticated] = useState(false)   
    // Functiones en mi contexto    
    // //login -> para iniciar sesion
    const login = async (username, password) => {
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify({username, password}),
                credentials: "include" // PARA QUE LAS COOKIES SE GUARDEN EN EL SERVIDOR
            })
            if (!response.ok) {
                return {success: false, message: "Credenciales invalidas"}
            }
            setisAuthenticated(true)
            return {success: true, message: "Inicio de sesion exitoso"}
           
        
        } catch (error) {
            console.error("Error al iniciar sesion", error)
            throw error
        }
    }
    // // checkAuth -> Para verificar si el usuario esta autenticado siempre que monte o renderice el componente    


    const checkAuth = async () => {
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/check-auth`, {
                credentials: "include"
            })
            if (!response.ok) {
                setisAuthenticated(false)
                return {success: false, message: "No autenticado"}
            }
            setisAuthenticated(true)
            return {success: true, message: "Autenticado"}
        } catch (error) {
            console.error("Error al verificar la autenticacion", error)
            setisAuthenticated(false)
            return false;
        }
    }

    


    //logout -> para cerrar sesion
    const logout = async () => {
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
            
            if (!response.ok) {
                return {success: false, message: "Error al cerrar sesión"}
            }
            
            setisAuthenticated(false)
            return {success: true, message: "Sesión cerrada exitosamente"}
        } catch (error) {
            console.error("Error al cerrar sesión", error)
            throw error
        }
    }

    //register -> para registrar un usuario
    const register = async (username, password) => {
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            });

            if (!response.ok) {
                return {success: false, message: "Error al registrar usuario"}
            }

            return {success: true, message: "Usuario registrado exitosamente"}
        } catch (error) {
            console.error("Error al registrar usuario", error)
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            register,
            checkAuth
        }}>
            {children}
        </AuthContext.Provider>
    )

    // provider de mi contexto
return (
    <AuthContext.Provider.value={{isAuthenticated, login, checkAuth}}>
        {children}
    </AuthContext.Provider.value>
)

}


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth debe estar dentro de un AuthProvider")
    }
    return context
}

export default AuthContext
