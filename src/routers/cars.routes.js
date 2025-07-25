const express = require('express');
const {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController} = require('../controllers/cars.controllers')
const {checkCarTypes} = require('../utils/checkCarTypes')
// La configuracion de el router tematico (cars)
const carRouter = express.Router();

// La configuracion de las rutas (get post put delete) de dicho router
carRouter.get('/', getAllCarsController)
carRouter.get('/:id', getCarByIdController)
carRouter.post('/', checkCarTypes, addCarController)
carRouter.put('/:id', updateCarController)
carRouter.delete('/:id', deleteCarController)

// Las funciones de las rutas (se delegan)
// controllers.js


module.exports = carRouter;

