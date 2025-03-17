import axios from 'axios';
import { Pokemon } from '../models/Pokemon.js';

export class PokeApiService {
  static async fetchAndStorePokemon(limit = 151) {
    try {
      // Obtener lista inicial de Pokémon
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      
      // Crear array de promesas para obtener detalles de cada Pokémon
      const pokemonPromises = response.data.results.map(pokemon => 
        axios.get(pokemon.url)
      );

      // Usar Promise.all para obtener todos los detalles en paralelo
      const pokemonDetails = await Promise.all(pokemonPromises);

      // Mapear y guardar en la base de datos
      const pokemons = pokemonDetails.map(detail => {
        const pokemon = detail.data;
        return new Pokemon({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map(type => type.type.name),
          abilities: pokemon.abilities.map(ability => ({
            name: ability.ability.name,
            isHidden: ability.is_hidden
          })),
          stats: pokemon.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
          })),
          height: pokemon.height,
          weight: pokemon.weight,
          sprites: pokemon.sprites
        });
      });

      await Pokemon.insertMany(pokemons);
      return pokemons;
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      throw error;
    }
  }
}