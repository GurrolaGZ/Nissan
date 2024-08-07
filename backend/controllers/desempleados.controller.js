import {modelo} from '../models/desempleados.model.js'

export const testDesempleado = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Juan",
},
    {
    email: "juan@gmail.com"
})
