import jwt from 'jsonwebtoken';

// Simulación de usuarios
const users = [
  { id: '1', username: 'javier', password: '123456' },
];

export async function login({ username, password }) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return token;
}
