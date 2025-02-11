import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([

    {
        path:"/",
        Element:<RootLayout/>,
        children:[
            {
                index:true,
                Element:<Home/>
            },
            {
                path:"/login",
                Element:<Login/>
            },
            {
                path:"/register",
                Element:<Register/>
            },
            {
                path:"/dashboard",
                Element:(
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                )
            }
        ]
    }
])
