const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarios');


router.get('/usuario', UsuarioController.obtenerUsuarios);
router.post('/usuario', UsuarioController.crearUsuario);

module.exports = router;