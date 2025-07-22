import * as authService from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    if (!token) return res.status(401).json({ error: 'Credenciales inválidas' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
