import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                path: "/",
                element: <Navigate to="login" replace />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ]
    }
        
]);


