require("dotenv").config();
const mongoose = require("mongoose");

// La configuracion para conectrnos con la DB

const DATABASE_URL = process.env.DATABASE_URL;

// IIFE -> Immediately Invoked Function Expression
// Funcion anonima autoejecutable
(
  async () => {
    try {
      await mongoose.connect(DATABASE_URL);
      console.log("Base de datos conectada :)");
    } catch (error) {
      console.log(error);
    }
  }
)()
