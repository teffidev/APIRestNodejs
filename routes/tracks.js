const express = require("express");
const router = express.Router();
const authMiddlewear = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

//ToDo http://localhost/tracks GET, POST, PUT, DELETE

/**Lista los items*/
router.get("/", authMiddlewear, getItems);
/**Obtener un detalle de Item*/
router.get("/:id", authMiddlewear, validatorGetItem, getItem);
/**Crea un registro*/
router.post("/", authMiddlewear, checkRol(["admin"]), validatorCreateItem, createItem);
/**Actualizar registro*/
router.put("/:id", authMiddlewear, validatorGetItem, validatorCreateItem, updateItem);
/**Eliminar un item*/
router.delete("/:id", authMiddlewear, validatorGetItem, deleteItem);


module.exports = router;