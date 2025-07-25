const {getAllCarsService, getCarByIdService, addCarService, updateCarService, deleteCarService} = require("../services/cars.services")



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

const updateCarController = async (request, response) => {
    const carToEdit = await updateCarService(request)

    response.json(carToEdit)
}

const deleteCarController = async (request, response) => {
    const carToDelete = await deleteCarService(request)

    response.json(carToDelete)
}

// La logica de las funciones (se delega)
// -> services.js

module.exports = {
    getAllCarsController,
    getCarByIdController,
    addCarController,
    updateCarController,
    deleteCarController
}