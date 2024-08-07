import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import  {testEmpleado}  from "./backend/controllers/empleados.controller.js";
import  { testBecario }  from "./backend/controllers/becarios.controller.js";
import  { testDesempleado }  from "./backend/controllers/desempleados.controller.js";
import  { testEntrenador }  from "./backend/controllers/entrenadores.controller.js";
import  { testNomina }  from "./backend/controllers/nomina.controller.js";
import  { testSupervisor }  from "./backend/controllers/supervisores.controller.js";
import  { testTecnico }  from "./backend/controllers/tecnicos.controller.js";
import { testLideres } from "./backend/controllers/lideres.controller.js";
dontenv.config();


mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('jalo')
})
.catch((err) => {
    console.log('no jalo', err)
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('Esta funcionando correctamente tu servidor local')
})

testEmpleado()
testBecario()
testDesempleado()
testEntrenador()
testLideres()
testNomina()
testSupervisor()
testTecnico()