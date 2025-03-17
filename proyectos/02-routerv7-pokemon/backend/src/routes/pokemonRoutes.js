import { Router } from "express";
import { PokemonController } from "../controllers/PokemonController.js";

const router = Router();

router.get('/pokemons', PokemonController.getAllPokemons);
router.get('/pokemons/:id', PokemonController.getPokemonById);
router.get('/pokemons/name/:name', PokemonController.searchPokemonByName);
router.post('/pokemons/initialize', PokemonController.initializeDatabase);

export default router;
