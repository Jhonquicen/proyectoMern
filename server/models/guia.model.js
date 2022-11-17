const mongoose = require("mongoose");

//Información que va dentro de colección
const EsquemaGuia = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },

    lugar: {
        type: String,
        required: [true, "lugar obligatorio"],
        minLength: [3, "el Guia debe tener al menos 3 caracteres"]
    },

    

    categoria: {
        type: String,
        required:[true, "categoria obligatoria"]
    }

    // estado: {
    //     type: Array,
    //     required: [true, "Estados obligatorios"],
    //     default: ["undecided","undecided","undecided"]
    // }   otra forma de hacer la accion

}, {timestamps: true, versionKey:false})




const Guia = mongoose.model("Guias", EsquemaGuia);
module.exports = Guia;