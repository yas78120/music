var mongoose = require("./connect");
var musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "el titulo es requerido"]
    },
    subtitle: {
        type: String,
        default: "nome data",
        required: [true, "El dubtitulo es requerido"]
    },
    duration: {
        type: String,
    },
    bitrate: {
        type: String,
    },
    size:{
        default:"none data",
        type: String, 
    },
    genero: Array,
    comentaries: [{ body: String, date: Date}],
    likes: [{_iduser: 
        {
            type: String,
            default:"none user",
            required: [true, "El usuario es necesario"]
        },
        date: {
        type: Date,
        default: new Date()
    }}],
    album:{
        type: String,
        default:"none album",
        required: [true, " El album es necesario"]
    },
    year: Number,
    image: {
        type: String,
        default:"no image",
        required: [true, "la ruta de la imagen es necesaria"]
    },
    relativepath : {
        type: String,
    },
    pathfile: {
        type: String,
        required: [true, "la ruat de las cancion es necesaria"]
    }
    
});
var MUSIC = mongoose.model("music", musicSchema);
module.exports = MUSIC;