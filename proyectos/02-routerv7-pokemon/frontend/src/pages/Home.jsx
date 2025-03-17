import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { usePokemon } from "../context/PokemonContext";
import { pokemonService } from "../services/pokemonService";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToFavorites } = usePokemon();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      // Primero obtenemos la lista de todos los Pokemon
      const pokemonList = await pokemonService.getAllPokemons();
      
      // Creamos un array de promesas para obtener los detalles de cada Pokemon
      const pokemonPromises = pokemonList.map(pokemon => 
        pokemonService.getPokemonById(pokemon.id)
      );

      // Usamos Promise.all para resolver todas las promesas en paralelo
      const pokemonDetails = await Promise.all(pokemonPromises);
      
      setPokemons(pokemonDetails);
    } catch (error) {
      console.error("Error al cargar los pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons disponibles</h1>
      {/* Grid de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta individual de cada Pokemon */}
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-white shadow-md rounded-md p-6">
            <div className="relative group">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto transform group-hover:scale-120 transition-transform duration-500"
              />
            </div>
            <h2 className="text-xl font-semibold text-center capitalize mt-2">
              {pokemon.name}
            </h2>
            {/* Aquí van los botones  */}
            <div className="flex justify-center space-x-2 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
                // onClick={hand} aquí llamaré a la función del contexto para añadir a favoritos
                onClick={() => addToFavorites(pokemon)}
              >
                Añadir a Favoritos
              </button>

              {/* // tiene que ir a /search/${pokemon.name} */}

              <Link
                to={`/search/${pokemon.name}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
