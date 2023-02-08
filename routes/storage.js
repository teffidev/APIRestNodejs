const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/storage");

//http://localhost:3001/api/storage


/**
 * Lista los items
*/
router.get("/", getItems);
/**
 * Obtener un detalle de Item
 * */
router.get("/:id", validatorGetItem, getItem);
/**
 * Crear un registro
 * */
router.post("/", uploadMiddleware.single("myfile"), createItem);
/**
 * Actualizar registro
 * */
//router.put("/:id", validatorGetItem, updateItem);
/**
 * Eliminar un item
 * */
router.delete("/:id", validatorGetItem, deleteItem);


module.exports= router; 

