/**Declaración de paquete de mongoose*/
const mongoose = require("mongoose");

/**Declaración de una arrow function */
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log('***** CONEXION CORRECTA ****');           
        }else{
            console.log('***** ERROR DE CONEXION *****');
        }
    });

}; 

/**Con "module" indico a JS al NODE que esto se va a exportar, que 
alguien más la va a poder llamar.*/
/**vamos a exportar esta función, porque en NODE necesitamos
	ya sea desde la vista, desde el controlador, desde algun otro archivo poder
	importar el funcionamiento de una función en particular */
module.exports = dbConnect

/**Vamos a usar el famoso URI la conexión a la BD de datos que
hemos creado:
mongodb+srv://teffi:root@cluster0.tlqxu8w.mongodb.net/dbapi?retryWrites=true&w=majority
*/

