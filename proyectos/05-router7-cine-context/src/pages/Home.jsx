import { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [page, setPage]=useState(1);
  // me traigo la data de las peliculas populares
  const {data, loading, error} =useFetch(()=>getPopularMovies(page),[page]);
  // que pasa con el scroll
  const handlePageChange=(newPage)=>{
    window.scrollTo({top:0, behavior:"smooth"});
    setPage(newPage);
  }
  // si hay error cargando???
  if(error){
    return (
      <div>
        <h2 className="text-red-600 font-bold text-2xl">Error al traer las películas</h2>
        <p className="text-xl font-medium">{error.message}</p>
        <Link to="/" className="text-blue-600 font-bold text-xl">Volver al inicio</Link>
      </div>
    )
  }
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Bienvenido a Videoclub</h1>
        <p className="text-lg font-medium text-sky-900 mt-2">Descubre las películas más populares del momento</p>
      </header>
      <section>
        {/* Sección de películas populares */}
        <h2>Películas Populares</h2>
        {loading ? (<div>Cargando películas...</div>): (
          <>
            grid de las películas
            <div className="grid grid-cols-2 md-grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results.map((movie)=>{
                // aquí va el componente movieCard
                <MovieCard key={movie.id} movie={movie}/>
              })}
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={()=>handlePageChange(page-1)} disabled={page===1}
              className="text-white px-4 py-2 rounded-lg transition-colors duration-200 bg-sky-800 hover:bg-sky-950 font-medium">
                Anterior
              </button>

              <span>


              </span>
              <button onClick={()=>handlePageChange(page+1)} disabled={page===data?.total_pages}
              className="text-white px-4 py-2 rounded-lg transition-colors duration-200 bg-sky-800 hover:bg-sky-950 font-medium">
                Siguiente
              </button>

            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Home