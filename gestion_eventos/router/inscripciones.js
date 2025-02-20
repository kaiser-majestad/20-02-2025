const express = require('express');
const router = express.Router();
const InscripcionController = require('../controller/inscripciones');

router.get('/inscripcion', InscripcionController.obtenerInscripciones);
router.post('/inscripcion', InscripcionController.inscribirUsuario);
router.delete('/inscripcion/:id', InscripcionController.cancelarInscripcion);

module.exports = router;