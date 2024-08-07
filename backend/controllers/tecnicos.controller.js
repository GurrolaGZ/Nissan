import {modelo} from '../models/tecnicos.model.js'

export const testTecnico = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Josue",
},
    {
    email: "josue@gmail.com"
})
