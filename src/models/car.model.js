const {mongoose, Schema} = require('mongoose');

// El modelo de objeto que maneja la coleccion en cuestion

// Aqui desarrollamos el modelo de objeto que represntaria un auto en la coleccion
// de autos

const CarSchema = Schema({
    brand: {
       type: String,
       required: true
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isNewCar: {
        type: Boolean,
        default: false
    }
})

const CarModel = mongoose.model("Car", CarSchema) 

/* 
    Argumentos del metodo "model" de mongoose.

    1er Argumento:
        - Define el nombre de cada objeto de tal coleccion. El nombre siempre va en singular con 
        la primera letra en mayuscula. Una vez definido el nombre, mongo sabe que debe conectarse
        con una coleccion cuyo nombre es el plural en minuscula del nombre del objeto definido.
    2do Argumento:
        - Le pasamos el Schema del modelo que representa cada objeto de la coleccion.
*/

module.exports = CarModel;

// Metodos para pegarle a la DB por accion
// get -> CarModel.find()
// getById -> CarModel.findById()
// post -> CarModel.create()
// put -> CarModel.findByIdAndUpdate()
// delete -> CarModel.findByIdAndDelete()

/* 
    Front -> GET -> Back -> find() -> DB
    Front -> POST -> Back -> create() -> DB
    Front -> PUT -> Back -> findByIdAndUpdate() -> DB
    Front -> DELETE -> Back -> findByIdAndDelete() -> DB
*/