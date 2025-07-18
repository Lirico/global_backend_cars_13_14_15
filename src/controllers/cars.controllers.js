const {getAllCarsService, getCarByIdService, addCarService} = require("../services/cars.services")



// Las funciones -> Las validaciones
//               -> Las respuestas
const getAllCarsController = async (request, response) => {

    const AllCars = await getAllCarsService(request) // Todos los autos o vacio

    // Validaciones
    // -> Para responder OK en caso success
    // -> Para responde Error -> 404/500

    response.json(AllCars)
}

const getCarByIdController = async (request, response) => {
    const carById = await getCarByIdService(request)

    response.json(carById)
}

const addCarController = async (request, response) => {
    const newCar = await addCarService(request)

    response.json(newCar)
}

// La logica de las funciones (se delega)
// -> services.js

module.exports = {
    getAllCarsController,
    getCarByIdController,
    addCarController
}