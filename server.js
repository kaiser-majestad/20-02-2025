const express = require('express');
const app = express();


const eventosRouter = require('./gestion_eventos/router/eventos');
const inscripcionesRouter = require('./gestion_eventos/router/inscripciones'); 
const usuariosRouter = require('./gestion_eventos/router/usuarios');


app.use(express.json());


app.use('/eventos', eventosRouter);
app.use('/inscripciones', inscripcionesRouter); 
app.use('/usuarios', usuariosRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});