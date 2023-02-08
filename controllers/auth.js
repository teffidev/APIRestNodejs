const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require('../utils/handleError');
const { usersModel } = require("../models");


/**
 * Este controlador es el encargado de registrar de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password); //Sobreescribimos
        const body = {...req, password} //Los tres puntos, se llaman split operator y lo que hace es crear un objeto nuevo y adicional le agregamos o le sobreesribimos una nueva propiedad.
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, {strict:false});

        const data = {
            token: tokenSign(dataUser),
            user: dataUser
        };

        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_REGISTER_USER');
    }
};


/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email});
        if(!user){
            handleHttpError(res, 'USER_NOT_EXISTS', 404);
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);

        if(!check){
            handleHttpError(res, 'PASSWORD_INVALID', 401);
            return
        }

        user.set('password', undefined, {strict:false});
        const data = {
            token: tokenSign(user),
            user
        }

        res.send({data})

    } catch (e) {
        handleHttpError(res, 'ERROR_LOGIN_USER');
    }

}


module.exports = {registerCtrl, loginCtrl}