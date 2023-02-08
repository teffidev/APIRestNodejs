const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    //.isNumeric({min:8, max:18}), es ejemplo porque la idea es que se pida fecha de nacimiento y que el Nacken sea capaz de calcularlo.
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorLogin = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorRegister, validatorLogin };