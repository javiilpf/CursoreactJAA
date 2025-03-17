import express from 'express';
import { register, login, verify } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Ruta de prueba
router.get('/test', (req, res) => {
  res.json({ mensaje: 'Rutas de autenticación funcionando' });
});

// Rutas de autenticación
router.post('/register', register);
router.post('/login', login);
router.get('/verify', authMiddleware, verify);

export default router;