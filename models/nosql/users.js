const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

/**Declaramos nuestro modelo:*/
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password :{
            type: String /*Vamos a guardar el encriptado de datos*/
        },
        role: {
            type: ["user", "admin"], /*indicamos el tipo de usuario*/
            default: "user" /*valor por defecto*/
        }
    },
    {
        timestamps: true, //ToDo createdAt, updatedAt --> columnas de fecha de creación y fecha de actualización
        versionKey: false
    }
);

UserSchema.plugin(MongooseDelete, {overrideMethods: "all"});

/**Vamos a exportar un modelo de mongoose con el nombre de la tabla
 * en nuestro caso el nombre de la colección o tabla seria "users"
 * que va a manejar todo un esquema o estructura de datos, como la
 * que hicimos en anteriormente.*/

module.exports = mongoose.model("users", UserSchema);