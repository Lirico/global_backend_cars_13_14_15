const CarModel = require("../models/car.model");

// Logica de los controladores (punto final del recorrido)
const getAllCarsService = async (request, response) => {
  const AllCars = await CarModel.find();

  if (!AllCars) {
    return { message: "Cars not found", statusCode: 404 };
  }

  return AllCars; // Todos los autos o vacio
};

const getCarByIdService = async (request, response) => {
  const id = request.params.id;

  const car = await CarModel.findById(id);

  if (!car) {
    return { message: "Car not found", statusCode: 404 };
  }

  return car;
};

const addCarService = async (request, response) => {
  try {
    const car = request.body;

    const newCar = new CarModel(car);

    // Tengo la posibilidad de alterar el objeto antes de guardarlo

    await newCar.save();
    return {message: "Car added successfully", statusCode: 201}
  } catch (error) {
    return {message: error, statusCode: 500}
  }
};

module.exports = {
  getAllCarsService,
  getCarByIdService,
  addCarService,
};
