import {modelo} from '../models/empleado.model.js'

export const testLideres = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Pancho",
},
    {
    email: "pancho@gmail.com"
})