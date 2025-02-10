import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Toaster } from "sonner";

const App = () => {

  return (
    // aquí podríamos poner cualquier contexto que necesitemos
    <FavoritesProvider >
      <Toaster position="top-right" duration={2000}/>
    <RouterProvider router={router}/>
  </FavoritesProvider>
  ) ;
};

export default App;
