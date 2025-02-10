import { createContext, useEffect, useState } from "react";

const ReviewsContext = createContext();
const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    // Cargar favoritos desde localStorage al iniciar
    useEffect(() => {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }
    }, []);

    const addReview = (reviews) => {
        setReviews((prevReviews) => {
           const updatedReviews= [...prevReviews, reviews];
            localStorage.setItem("reviews", JSON.stringify(updatedReviews));
            return updatedReviews;
        })
    }
    const removeReview = (reviews) => {
        const updatedReviews = reviews.filter(r => r.id !== reviews.id);
        setReviews(updatedReviews);
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        return updatedReviews;
    }
    return (
        <ReviewsContext.Provider value={{ reviews, addReview, removeReview }}>
            {children}
        </ReviewsContext.Provider>
    );
}
  


export default ReviewsProvider;