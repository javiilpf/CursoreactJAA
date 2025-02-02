// Proteccion de rutas a traves de un componente usando la funcion
// isAuthenticated()

import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import RootLayout from "../layout/RootLayout";

const isAuthenticated = () => {
    // vete al localStorage y verifica si está la clave token
    return localStorage.getItem('token')?true:false;
}


const ProtectedRoute = ({children}) => {
    // condiciones de autenticación
    if(!isAuthenticated()){
        // si no está autenticado, redirige a la página de inicio
        return <Navigate to="/" replace={true}/>;
    }
    return children;
}

export const router=createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "/dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

