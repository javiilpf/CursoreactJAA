import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Esquema de la colección User
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    favorites: [{
        type: Number,
        ref: 'Movie'
    }]
}, {
    timestamps: true
});

// Eliminar el método comparePassword ya que usaremos bcrypt directamente

// Asegurarse de que el modelo se recrea correctamente
mongoose.models = {};

// Crear y exportar el modelo
const User = mongoose.model('User', userSchema);
export default User;