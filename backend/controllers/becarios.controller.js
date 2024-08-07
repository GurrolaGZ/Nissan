import {modelo} from '../models/becario.model.js'

export const testBecario = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Roman",
},
    {
    email: "roman@gmail.com"
})
