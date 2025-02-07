const VITE_API_TOKEN= import.meta.env.VITE_API_TOKEN;
const VITE_BASE_URL=import.meta.env.VITE_BASE_URL;
const VITE_BASE_IMG_URL=import.meta.env.VITE_BASE_IMG_URL;

//objeto que me permite decidir el tamaño de las imágenes
export const IMAGES_SIZES={
    POSTER:"w500",
    BACKDROP:"original",
    
}

//--------------- FUNCIONES QUE VOY A CREAR PARA LA API ---------------
// funcion para obtener la url de una imagen
// le paso un path :/ssss
export const getImageUrl=(path,size=IMAGES_SIZES.POSTER)=>{
    if(!path){
        return "/placeholder-movie.png";
    }
    return `${VITE_BASE_IMG_URL}/${size}${path}`;
}

const fetchFromApi=async(endpoint, options={})=>{
    try{
        const response=await fetch(`${VITE_BASE_URL}${endpoint}?api_key=${VITE_API_TOKEN}&language=es-ES&${new URLSearchParams(options)}`);
        if(!response.ok){
            throw new Error("Error fetching from API");
        }
        return await response.json();
    }catch(error){
        console.log("Error fetching from API", error);
    }

}

//funcion para obtener las peliculas populares
export const getPopularMovies=async(page=1)=>{
    // /movie/popular
    return fetchFromApi("/movie/popular",{ page });
}

// Detalles de las películas
export const getMovieDetails=async(movieId)=>{
    return fetchFromApi(`/movie/${movieId}`);
}

// Buscar películas
export const searchMovies=async(query,page=1)=>{
    return fetchFromApi("/search/movie",{ query, page });
}

export const getMovieVideos=async(movieId)=>{
    return fetchFromApi(`/movie/${movieId}/videos`);
}




