const express = require("express");
const fs = require("fs"); /*El famoso file sistem, viene con el NodeJS*/
const router = express.Router();

/*lo que nos va a dar la ruta absoluta, donde se enceuntra esto
en nuestra maquina */
const PATH_ROUTERS = __dirname;

/**Con la función de fs vamos a hacer uso de una función que se llama
 * leer el directorio de manera sincronica "readdirSync"
 * y le decimos que lea el directorio de PATH y esto nos devolvera 
 * un array */

/**Esta función lo que hace es devolvernos los nombres de los archivos
 * que se encuentran dentro de routes
 */

/*Como es una array yo quiero que me filtre, en el momento que me filtre
queremos que nos agarre el file(ese tracks.js)*/

/*Obtenemos el nombre del archivo sin la extensión, vamos a hacer una 
función y con ayuda de la función split la cual transforma una cadena de 
texto en un array basado en algo, en este caso lo haremos
basado en el punto y con ayuda del shift que nos tome el primer valor */
const removeExtension = (fileName) => {
    //ToDo tracks.js 
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTERS).filter((file) => {
    //Necesitamos concatenar ese nomnbre con una familia de rutas
    //constante name que será el resultado de la limpieza de ese nombre
    const name = removeExtension(file) //Puede traer index o tracks

    //Como no me interesa index vamos a hacer un condicional
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`))//ToDo http://localhost:3000/api/tracks
        
    }

})


module.exports = router