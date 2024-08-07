import {modelo} from '../models/entrenadores.model.js'

export const testEntrenador = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Javier",
},
    {
    email: "javier@gmail.com"
})
