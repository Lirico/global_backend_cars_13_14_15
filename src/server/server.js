const express = require('express');
const carRouter = require('../routers/cars.routes')

const app = express();
app.use(express.json());

// Se encuentra la configuracion del servidor

// Ejecucion de los routers y la declaracion de las rutas
app.use('/cars', carRouter) 


// La configuracion de los routers (se delega)
// -> routes.js

module.exports = app;
