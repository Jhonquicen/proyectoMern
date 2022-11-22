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

    fiesta: {
        type: String,
        required: [true, "Fiestas obligatorias"]
        
    },

    atraccion: {
        type: String,
        required: [true, "Actraccion obligatoria"]
        
    },

    clima: {
        type: String,
        required: [true, "Clima obligatorio"]
        
    },

    imagen: {
        type: String,
        required: [true, "Imagen obligatoria"]
    },

    coordinates: {
        type: String,
        required: [true, "Coordenadas obligatoria"]
    }

}, {timestamps: true, versionKey:false})




const Guia = mongoose.model("Guias", EsquemaGuia);
module.exports = Guia;