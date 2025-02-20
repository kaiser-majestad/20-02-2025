let db = require("../config/database");

class InscripcionController {
    static async obtenerInscripciones(req, res) {
        let lista = await db.query("SELECT * FROM inscripciones");
        res.json(lista);
    }

    static async inscribirUsuario(req, res) {
        let { usuario_id, evento_id } = req.body;
        let { inscripcion } = await db.query("INSERT INTO inscripciones (usuario_id, evento_id) VALUES (?, ?)", [usuario_id, evento_id]);
        res.json(inscripcion);
    }

    static async cancelarInscripcion(req, res) {
        let { id } = req.params;
        await db.query("DELETE FROM inscripciones WHERE id=?", [id]);
        res.json({ message: "Inscripción cancelada" });
    }
}

module.exports = InscripcionController;