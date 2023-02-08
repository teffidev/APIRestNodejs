const express = require("express");
const {registerCtrl, loginCtrl} = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");


/**
 * Crear registro!
 */
// http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);



// http://localhost:3001/api/auth/login
router.post("/login", validatorLogin, loginCtrl);


module.exports = router;