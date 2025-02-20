const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarios');

router.get('/', UsuarioController.obtenerUsuarios);
router.post('/', UsuarioController.crearUsuario);

module.exports = router;