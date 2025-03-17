import { Outlet, RouterProvider } from "react-router-dom"
import { router } from "./router"
import { AuthProvider } from "./context/AuthContext"


const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}/>
        <Outlet/>
      </AuthProvider>
    </>
  )
}

export default App