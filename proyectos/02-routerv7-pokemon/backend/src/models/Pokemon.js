import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  name: {type: String, required: true},
  types: [{
    type: String
  }],
  abilities: [{
    name: {type: String, required: true},
    isHidden: {type: Boolean, required: true}
  }],
  stats: [{
    name: {type: String, required: true},
    value: {type: Number, required: true}
  }],
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  sprites: {
    other: {
      dream_world: {
        front_default: String
      }
    }
  }
});

export const Pokemon = mongoose.model('Pokemon', pokemonSchema);
