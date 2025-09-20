const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacion_45.controller');

// Definición de rutas
router.get('/', habitacionController.index);
router.get('/create', habitacionController.create);
router.post('/', habitacionController.store);
router.get('/:id', habitacionController.show);

module.exports = router;