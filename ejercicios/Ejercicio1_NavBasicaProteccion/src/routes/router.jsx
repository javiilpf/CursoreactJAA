import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import { ROUTES } from "./path";
import RootLayout from "../layout/rootLayout";

export const router=createBrowserRouter([
    {
    element: <RootLayout/>,
    errorElement: <ErrorPages/>,
    children:[{
        path: ROUTES.HOME,
        element: <Home/>
        },
        {
            path: ROUTES.PERFIL,
            element: <Profile/>
        },
        {
            path: ROUTES.DASHBOARD,
            element: <Dashboard/>
        },
    ]}
])