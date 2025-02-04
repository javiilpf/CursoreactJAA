import { RouterProvider } from "react-router-dom"
import { router } from "./router"


const App = () => {
  // Aquí podríamos poner cualquier contexto que necesitemos

  return (
    <RouterProvider router={router}/>
  )

}

export default App
