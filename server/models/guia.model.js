const mongoose = require("mongoose");

//Información que va dentro de colección
const EsquemaGuia = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        
    },
    gastronomia: {
        type: String,
        required: [true, "Gastronomia obligatoria"]
        
    },

    descripcion: {
        type: String,
        required: [true, "Descripcion obligatoria"]
    },

    fiesta: {
        type: String,
        required: [true, "Fiestas obligatorias"]
        
    },

    atraccion: {
        type: String,
        required: [true, "Atraccion obligatoria"]
        
    },

    gentilicio: {
        type: String,
        required: [true, "Gentilicio obligatorio"]
        
    },

    economia: {
        type: String,
        required: [true, "Economia obligatorio"]
        
    },

    imagen: {
        type: String,
        required: [true, "Imagen obligatoria"]
    },

    // img: {
    //     type: Boolean,
    //     default: true
    // },

    coordinates: {
        type: String,
        required: [true, "Coordenadas obligatoria"]
    },

    comentario: {
        type: String
    }

}, {timestamps: true, versionKey:false})




const Guia = mongoose.model("Guias", EsquemaGuia);
module.exports = Guia;