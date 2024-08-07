import { esquema } from "./entrenadores.model.js"
import { model } from "mongoose"

 

 export const modelo = new model('Tecnico', esquema)