import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const { showFavoriteAddedToast, showFavoriteRemovedToast, showErrorToast } = useToast();

    // Cargar favoritos desde localStorage al iniciar
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const addToFavorites = (movie) => {
        if (favorites.some(m => m?.id === movie.id)) {
            showErrorToast("La película ya está en favoritos");
            return;
        }

        const updatedFavorites = [...favorites, movie];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        showFavoriteAddedToast();
    };

    const removeFromFavorites = (movieId) => {
        const updatedFavorites = favorites.filter(m => m.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        showFavoriteRemovedToast();
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites debe ser usado dentro de un FavoritesProvider");
    }
    return context;
};