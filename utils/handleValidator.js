const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next(); // Continua hacia el controlador
    } catch (err) { //si no funciona retorna un error 403 y envia un array con los errores
        res.status(403);
        res.send( {errores: err.array() })
    }
};

module.exports = validateResults;