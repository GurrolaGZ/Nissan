import {modelo} from '../models/supervisores.model.js'

export const testSupervisor = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Sergio",
},
    {
    email: "sergio@gmail.com"
})
