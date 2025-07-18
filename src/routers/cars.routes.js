const express = require('express');
const {getAllCarsController, getCarByIdController, addCarController} = require('../controllers/cars.controllers')

// La configuracion de el router tematico (cars)
const carRouter = express.Router();

// La configuracion de las rutas (get post put delete) de dicho router
carRouter.get('/', getAllCarsController)
carRouter.get('/:id', getCarByIdController)
carRouter.post('/', addCarController)

// Las funciones de las rutas (se delegan)
// controllers.js


module.exports = carRouter;

