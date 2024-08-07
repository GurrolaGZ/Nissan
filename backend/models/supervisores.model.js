import { esquema } from "./desempleados.model.js"
import { model } from "mongoose"

export const modelo = new model('Supervisor', esquema)