import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RootLayout from "../layout/RootLayout";

import Login from "../pages/Login";
import Home from "../pages/Home";
import EventForm from "../pages/EventForm";
// import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "events/new",
        element: (
          // <ProtectedRoute>
            <EventForm />
          // </ProtectedRoute>
        ),
      },
      {
        path: "events/new/:id",
        element: (
          <ProtectedRoute>
            <EventForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);