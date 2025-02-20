const express = require('express');
const router = express.Router();
const EventoController = require('../controller/eventos');

router.get('/eventos', EventoController.obtenerEventos);
router.post('/eventos', EventoController.crearEvento);
router.put('/:id', EventoController.actualizarEvento);
router.delete('/:id', EventoController.eliminarEvento);

module.exports = router;