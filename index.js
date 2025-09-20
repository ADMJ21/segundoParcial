const express = require('express');
const app = express();
const habitacionRouter = require('./routes/habitacion_45.router');

// Configuración
app.get ('/', (req, res) => {
  res.send('Bienvenido a la aplicación de gestión de habitaciones');
});
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
app.use('/habitaciones', habitacionRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});