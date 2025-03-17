const API_URL = import.meta.env.VITE_API_URL;

export const pokemonService = {
  async getAllPokemons() {
    const response = await fetch(`${API_URL}/pokemons`);
    if (!response.ok) {
      throw new Error('Error al obtener los pokémon');
    }
    return response.json();
  },

  async getPokemonById(id) {
    const response = await fetch(`${API_URL}/pokemons/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el pokémon');
    }
    return response.json();
  },

  async searchPokemonByName(name) {
    const response = await fetch(`${API_URL}/pokemons/name/${name}`);
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }
    return response.json();
  }
};