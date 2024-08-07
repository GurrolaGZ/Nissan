import { Schema, model } from 'mongoose'

const esquema = new Schema ({
    name:{
     type:String
    },
    sueldo:{
        type:String
    }
 })
 

 export const modelo = new model('Nomina', esquema)