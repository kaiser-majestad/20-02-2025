const express = require('express');
const router = express.Router();
const InscripcionController = require('../controller/inscripciones');
//
router.get('/', InscripcionController.obtenerInscripciones);
router.post('/', InscripcionController.inscribirUsuario);
router.delete('/:id', InscripcionController.cancelarInscripcion);

module.exports = router;