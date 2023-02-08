const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
/**Estas funciones van a recibir todas las cosas que nos envia express
 * en este caso vamos a usar request y response */


//SIEMPRE LOS CONTROLADORES DEBEN RETORNAR ALGO PARA EVITAR QUE
//SE QUEDE COLGADA NUESTRA APP

/**
 * Obtener lista de la base de datos -GET!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const user = req.user;
        const data =  await tracksModel.find({}); //esto devuelve una promesa
        res.send({data, user})        
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ALL_ITEMS');
    }
};


/**
 * Obtener un detalle - GET!
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data =  await tracksModel.findById(id);
        res.send({data}) 
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
};

/**
 * Insertar un registro - POST!
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");        
    }
};

/**
 * Actualizar un registro - PUT!
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const {id, body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");        
    }
};

/**
 * Eliminar un registro - DELETE!
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data =  await tracksModel.delete({_id:id});
        res.send({data}) 
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEM');
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }