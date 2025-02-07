import { Link } from "react-router-dom"
import { getImageUrl } from "../services/tmdb";


const MovieCard = ({movie}) => {
  const rating =movie.vote_average?movie.vote_average.toFixed(1):"N/A";
  return (
    <Link to={`/movie/:${movie.id}`} className="group">
      <article className="card tranform transition-transform duration-300 hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img src={getImageUrl(movie.poster.path)} alt="movie.title" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute top-2-right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            ⭐{movie.vote_average}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold line-clamp-2 ">{movie.title}</h3>
            <p className="text-sm text-gray-600">{movie.release_date}</p>
          </div>
        </div>
      </article>

    </Link>
  )
}

export default MovieCard;