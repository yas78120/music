var mongoose = require("./connect");
var userschema = new mongoose.Schema({
    nick: {
        type: String,
        required:[true, "El nickname es necesario"]
    },
    age: {
        type: Number,
        required: [true, "la edad es necesaria"]
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        validate: {
            validator: (value) => {
                return /^[\w\.]+@[\w\.]+\.\w{3,3}$/.test(value);
            },
            message: props => `${props.value} no es valido`
        }
    },
    password: {
        type: String,
        required: [true,"El password es necesario"],
    },
    roles: {
        type: Array,
        default: []
    },
    playlist: {
        type: Array,
        default: []
    },
    create: {
        type: Date,
        default: new Date()
    }
});
var user = mongoose.model("user", userschema);
module.exports = user;