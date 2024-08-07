import { Schema, model } from 'mongoose'
import { type } from 'os'

const esquema = new Schema ({
    name:{
     type:String
    },
    email:{
        type:String
    }
 })
 

 export const modelo = new model('Empleado', esquema)