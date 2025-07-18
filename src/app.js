require('dotenv').config()
require('./db/config');
const app = require('./server/server')

// Referencia el puerto
const PORT = process.env.PORT || 8080;

// Escucha del servidor -> Se escucha en dicho puerto
app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT} `))

// EJECUTAR la configuracion para conectarnos con la DB




// La configuracion del servidor (se delega)
// -> server.js

// La configuracion para conectarnos con la DB (se delega)
// config.js