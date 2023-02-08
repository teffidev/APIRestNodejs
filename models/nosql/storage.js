const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

/**Declaramos nuestro modelo:*/
const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true, //ToDo createdAt, updatedAt --> columnas de fecha de creación y fecha de actualización
        versionKey: false
    }
);

StorageSchema.plugin(MongooseDelete, {overrideMethods: "all"});

/**Vamos a exportar un modelo de mongoose con el nombre de la tabla
 * en nuestro caso el nombre de la colección o tabla seria "users"
 * que va a manejar todo un esquema o estructura de datos, como la
 * que hicimos en anteriormente.*/

module.exports = mongoose.model("storages", StorageSchema);