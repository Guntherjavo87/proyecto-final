import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

console.log("corriendo...no es loco?")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware CORS
app.use(cors());

// Middleware para interpretar JSON en el body
app.use(bodyParser.json());

// Rutas (más adelante las importamos)

// Middleware para rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware global para manejo de errores (opcional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

// ...

app.use(productsRoutes);
app.use(authRoutes);
