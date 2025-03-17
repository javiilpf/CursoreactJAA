import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { config } from '../config/config.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Intentando registrar:', { email });

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();
        console.log('Usuario registrado:', { id: user._id, email: user.email });

        res.status(201).json({
            mensaje: 'Usuario registrado correctamente',
            userId: user._id
        });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({
            mensaje: 'Error al registrar usuario',
            error: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Intento de login:', { email });

        const user = await User.findOne({ email }).select('+password');
        console.log('Usuario encontrado:', user ? 'Sí' : 'No');

        if (!user) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Contraseña válida:', isMatch ? 'Sí' : 'No');

        if (!isMatch) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { userId: user._id },
            config.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({
            mensaje: 'Login exitoso',
            user: {
                id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({
            mensaje: 'Error al iniciar sesión',
            error: error.message
        });
    }
};

export const verify = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json({
            user: {
                id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error en verificación:', error);
        res.status(500).json({
            mensaje: 'Error al verificar usuario',
            error: error.message
        });
    }
};

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.json({ mensaje: 'Logout exitoso' });
};