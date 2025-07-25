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
    return { message: "Car added successfully", statusCode: 201 };
  } catch (error) {
    return { message: error, statusCode: 500 };
  }
};

const updateCarService = async (request, response) => {
  try {
    // id del auto a editar
    const id = request.params.id;
    // el objeto de auto que va a reemplazar al auto a editar
    const carToEdit = request.body;

    // Encontrar el auto en la DB
    const carById = await CarModel.findById(id); // 2 posible respusta. 1ra -> objeto de auto / 2da -> undefined

    if (!carById) {
      return { message: "Car not found", statusCode: 404 };
    }

    // Actualizar el auto
    carById.brand = carToEdit.brand;
    carById.price = carToEdit.price;
    carById.model = carToEdit.model;
    carById.year = carToEdit.year;
    carById.isNewCar = carToEdit.hasOwnProperty("isNewCar") // Nos dice true si existe la prop en el obj. false si no existe
      ? carToEdit.isNewCar
      : carById.isNewCar; 

    await carById.save();

    return { message: "Car updated successfully", statusCode: 200 };
  } catch (error) {
    return { message: error, statusCode: 500 };
  }
};

const deleteCarService = async (request, response) => {
  
  try {
    const id = request.params.id;
    
    const carToDelete = await CarModel.findByIdAndDelete(id);
    
    if (!carToDelete) {
      return { message: "Car not found", statusCode: 404 };
    }

    return { message: "Car deleted successfully", statusCode: 200 };
  } catch (error) {
    return { message: error, statusCode: 500 };
  }
}

module.exports = {
  getAllCarsService,
  getCarByIdService,
  addCarService,
  updateCarService,
  deleteCarService
};
