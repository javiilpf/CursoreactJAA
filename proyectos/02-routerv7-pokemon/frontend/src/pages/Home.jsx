import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      if(!response.ok){
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      // ahora obtengamos la data de todos los pokemons en paralelo
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          if(!response.ok){
            throw new Error("No se puede hacer el fetch de los pokemons")
          }
          return await response.json();
        })
      )
      setPokemons(pokemonDetails);

    }catch(error){
      console.error("error fetchinf pokemons",error)
    }finally{
      setIsLoading(false)
    }
  }
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-gray-200 p-4 mb-4 rounded-lg">
            <div className="relative group">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} 
               className="w-32 mx-auto transition-transform duration-500 transform hover:scale-110"
            />
            </div>
            <h2 className="text-xl font-bold text-center mt-4 capitalize">{pokemon.name}</h2>
            <div className=" flex justify-center space-x-2 mt-4">
              {/* Aqui van los botones */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              // accion boton
              >
                Añadir a favoritos
              </button>
              <Link to={`/search/${pokemon.name}`}
              className="bg-red-500 text-white px-4 py-2 rounded-lg">Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home