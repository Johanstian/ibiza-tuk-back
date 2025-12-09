require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Configuración
const PORT = process.env.PORT || 3002;

// Connect to MongoDB
connectDB();

// Middlewares (para poder leer JSON en las peticiones)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
