import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Home = () => {
  const [movies, setmovies] = useState([])
  const api_token=import.meta.url.VITE_API_TOKEN;
  const fetchingDataMovies=async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_token}`);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setmovies(data.results);
  }
  useEffect(() => {
    fetchingDataMovies();
  }, [])

  return (
    <div className="space-y-8">
      {/* Cabecera */}
      <header className="text-4-xl font-bold text-sky-900">
        <h1>
          Bienvenido a movie App
        </h1>
        <p className="text-center">
          La mejor aplicacion para buscar películas y leer reseñas de cine
        </p>

      </header>
      <section>
        <div>
          <h2 className="text-2xl font-bold">Películas populares</h2>
          <Link to="/movies" className="text-sky-900 hover:underline">Ver todas</Link>
        </div>
      </section>
      {/* Grid con las películas populares */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Películas */}
        {movies.map((movie)=>{
          <MovieCard key={movie.id} movieId={movie}/>
        })}
      </div>
    </div>
  )
}

export default Home