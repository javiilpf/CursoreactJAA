import { Outlet, RouterProvider } from "react-router-dom"
import { router } from "./router"


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <Outlet/>
      <p>Footer
        
      </p>
    </>
  )
}

export default App