import { createBrowserRouter, Navigate } from "react-router-dom";
import Rootlayout from "../layout/Rootlayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProtectedRoute from "../components/ProtectedRoute";
import EditProductPage from "../pages/EditProductPage";
import DeleteProductPage from "../pages/DeleteProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <Navigate to="login" replace />

            },
            //Rutas públicas
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "products",
                element: <ProductPage />
            },
            {
                path: ":id",
                element: <ProductDetailPage />
            },
            {
                path: "new",
                element:(
                <ProtectedRoute>
                    <ProductPage />
                </ProtectedRoute>
                )
            },
            {
                path:":id/edit",
                element: (
                <ProtectedRoute>
                    <EditProductPage />
                </ProtectedRoute>
                )
            },
            {
                path: ":id/delete",
                element: (
                <ProtectedRoute>
                    <DeleteProductPage />
                </ProtectedRoute>
                )
            }
        ]
    }
])