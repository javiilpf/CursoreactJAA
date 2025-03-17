import dotenv from "dotenv";
import mongoose from "mongoose";
import Event from "./models/Event.js";

dotenv.config();

const events = [
  {
    name: "Conferencia de Tecnología",
    date: new Date("2023-10-01"),
    type: "conferencia",
    valoracion: 4,
  },
  {
    name: "Concierto de Rock",
    date: new Date("2023-11-15"),
    type: "concierto",
    valoracion: 5,
  },
  {
    name: "Taller de Pintura",
    date: new Date("2023-12-05"),
    type: "taller",
    valoracion: 3,
  },
  {
    name: "Conferencia de Salud",
    date: new Date("2023-09-20"),
    type: "conferencia",
    valoracion: 4,
  },
  {
    name: "Concierto de Jazz",
    date: new Date("2023-10-25"),
    type: "concierto",
    valoracion: 5,
  },
  {
    name: "Taller de Cocina",
    date: new Date("2023-11-10"),
    type: "taller",
    valoracion: 4,
  },
  {
    name: "Conferencia de Educación",
    date: new Date("2023-12-18"),
    type: "conferencia",
    valoracion: 3,
  },
  {
    name: "Concierto de Clásica",
    date: new Date("2023-09-30"),
    type: "concierto",
    valoracion: 4,
  },
  {
    name: "Taller de Fotografía",
    date: new Date("2023-10-12"),
    type: "taller",
    valoracion: 5,
  },
  {
    name: "Conferencia de Negocios",
    date: new Date("2023-11-22"),
    type: "conferencia",
    valoracion: 4,
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Event.insertMany(events);
    console.log("Events inserted successfully");
  } catch (error) {
    console.error("Error inserting events:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
