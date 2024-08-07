import {modelo} from '../models/nomina.model.js'

export const testNomina = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Pancho",
},
    {
    salario: "1800"
})
