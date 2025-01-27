//IMPORTACIONES 

import { createBrowserRouter } from "react-router-dom";
import RootLayaut from "../layouts/RootLayaut";
import ErrorPage from "../pages/ErrorPage";
import { ROUTES } from "./paths";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";
import AboutPage from "../pages/AboutPage ";


export const router = createBrowserRouter([
    {
        element: <RootLayaut />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.SEARCH,
                element: <SearchPage />,
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritesPage />,
            },
            {
                path: ROUTES.POKEMONS_DETAIL,
                element: <PokemonDetailsPage />,
                //loader:  permite hacer fetch directamente en la ruta
                errorElement: <ErrorPage/>,
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />,
            }
            
        ],
    }
]);