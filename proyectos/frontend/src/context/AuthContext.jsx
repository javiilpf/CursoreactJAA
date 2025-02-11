import { createContext, useState } from "react"

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





    //logout -> para cerrar sesion

    //register -> para registrar un usuario
}

export default AuthContext
