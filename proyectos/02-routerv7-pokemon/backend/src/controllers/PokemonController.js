import { Pokemon } from '../models/Pokemon.js';
import { PokeApiService } from '../services/pokeApiService.js';

export class PokemonController {
  // Obtener todos los Pokemon
  static async getAllPokemons(req, res) {
    try {
      let pokemons = await Pokemon.find({});
      
      // Si no hay pokemons, inicializa la base de datos
      if (pokemons.length === 0) {
        await PokeApiService.fetchAndStorePokemon();
        pokemons = await Pokemon.find({});
      }
      
      res.json(pokemons);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error al obtener los Pokemon' });
    }
  }

  // Obtener un Pokemon por ID
  static async getPokemonById(req, res) {
    try {
      const pokemon = await Pokemon.findOne({ id: req.params.id });
      if (!pokemon) {
        return res.status(404).json({ error: 'Pokemon no encontrado' });
      }
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el Pokemon' });
    }
  }

  // Buscar Pokemon por nombre
  static async searchPokemonByName(req, res) {
    try {
      const name = req.params.name.toLowerCase();
      const pokemon = await Pokemon.findOne({ name });
      if (!pokemon) {
        return res.status(404).json({ error: 'Pokemon no encontrado' });
      }
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ error: 'Error en la búsqueda del Pokemon' });
    }
  }

  // Inicializar la base de datos con Pokemon
  static async initializeDatabase(req, res) {
    try {
      await PokeApiService.fetchAndStorePokemon();
      res.json({ message: 'Base de datos inicializada con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al inicializar la base de datos' });
    }
  }
}
