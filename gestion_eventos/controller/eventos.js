let db = require("../config/database");
//
class EventoController {
    static async obtenerEventos(req, res) {
        let lista = await db.query("SELECT * FROM eventos");
        res.json(lista);
    }

    static async crearEvento(req, res) {
        let { nombre, descripcion, fecha, lugar, capacidad } = req.body;
        let { evento } = await db.query("INSERT INTO eventos (nombre, descripcion, fecha, lugar, capacidad) VALUES (?, ?, ?, ?, ?)", [nombre, descripcion, fecha, lugar, capacidad]);
        res.json(evento);
    }

    static async actualizarEvento(req, res) {
        let { id } = req.params;
        let { nombre, descripcion, fecha, lugar, capacidad } = req.body;
        await db.query("UPDATE eventos SET nombre=?, descripcion=?, fecha=?, lugar=?, capacidad=? WHERE id=?", [nombre, descripcion, fecha, lugar, capacidad, id]);
        res.json({ message: "Evento actualizado" });
    }

    static async eliminarEvento(req, res) {
        let { id } = req.params;
        await db.query("DELETE FROM eventos WHERE id=?", [id]);
        res.json({ message: "Evento eliminado" });
    }
}

module.exports = EventoController;