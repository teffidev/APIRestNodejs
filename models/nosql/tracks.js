const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

/**Declaramos nuestro modelo:*/
const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String, /*Le decimo a la BD que cuando ingrese este dato lo valide*/
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL"
            }
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId /*Quiere decir que será un String que debe conformar un cierto patron y algunos caracteres y una estructura de como son los ID en Mongo.*/
        },
    },
    {
        timestamps: true, //ToDo createdAt, updatedAt --> columnas de fecha de creación y fecha de actualización
        versionKey: false
    }
);

/**Plugin que le vamos a decir al modelo que use
 * Y tambien sobreescribimos los métodos que ya vienen nativos
 * de mongoose con esta opción del SOFT DELETE*/
TracksScheme.plugin(MongooseDelete, {overrideMethods: "all"});

/**Vamos a exportar un modelo de mongoose con el nombre de la tabla
 * en nuestro caso el nombre de la colección o tabla seria "users"
 * que va a manejar todo un esquema o estructura de datos, como la
 * que hicimos en anteriormente.*/

module.exports = mongoose.model("tracks", TracksScheme)