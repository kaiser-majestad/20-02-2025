let db = require("../config/database");

class UsuarioController {
    static async obtenerUsuarios(req, res) {
        let lista = await db.query("SELECT * FROM usuarios");
        res.json(lista);
    }

    static async crearUsuario(req, res) {
        let { nombre, email } = req.body;
        let { usuario } = await db.query("INSERT INTO usuarios (nombre, email) VALUES (?, ?)", [nombre, email]);
        res.json(usuario);
    }
}

module.exports = UsuarioController;