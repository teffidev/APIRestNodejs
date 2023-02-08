
/**El paquete "dotenv" nos ayudara a que funcionen bien las variables
de entornos en toda nuestra App, de esta forma le indicamos a nuestra
App que use las variables de entorno. */
require("dotenv").config()

/*Declaramos el paquete de EXPRESS que es el que nos va a ayudar
a iniciar o levantar un servicio web */
const express = require("express")

/**Invocamos la conexión a la BD importandolo con ayuda del riquire
Aqui hacemos uso del module.exports*/
const dbConnect = require('./config/mongo')

/*Con cors le estamos diciendo a la app que haga uso de cors, es como 
un plugin, es como decirle a la app que use esto que le va a ir mejor.
Evita ese error de orige cruzado entre los navegadores*/
const cors = require("cors")
const app = express()

/**Lo declaramos para evitar posteriormente un error */
app.use(cors());

/**Indica que este preparado para recibir información
a través de un POST */
app.use(express.json());

/**Indica que los recursos estaticos los saque de la carpeta que se llama storage*/
app.use(express.static("storage"));

/*Declatamos el puerto que luego se cambia con variables de entorno*/
const port = process.env.PORT || 3000

/**Aqui invocamos las rutas!*/
/**Le decimos a la app que haga uso de... podemos usar un prefijo 
 * antes, como por ejemplo /api/loquevenga */

/*localhost/api//_________ */
app.use("/api", require("./routes"))


/**Funcion inicial donde le indicamos a la App que comience a escuchar
por el puerto que declaramos y por consola indicamos que una vez 
se haya realizado el proceso correctamente que nos devuelva
un mensaje*/
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

/**Vamos a empezar a usar las variables de entorno para que el puerto
no sea un numero fijo, si no que sea una variable de entorno 

Lo que hacemos es que en nuestro directorio crearemos un archivo
llamado ".env.example" el ejemplo de un archivo .env
y luego dentro de este archivo vamos a declarar una palabra "variable de entorno"
que va a ser igual a PORT/PUERTO en este caso 3000*/

/*Una vez que ya tenemos declarada la función de dbConnect la invocamos*/
dbConnect()


