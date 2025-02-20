const express = require('express');
const app = express();
const eventosRouter = require('./router/eventos');
const inscripcionesRouter = require('./router/inscripciones');
const usuariosRouter = require('./router/usuarios');

app.use(express.json());

app.use('/eventos', eventosRouter);
app.use('/inscripciones', inscripcionesRouter);
app.use('/usuarios', usuariosRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});