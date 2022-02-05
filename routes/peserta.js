const route = require("express").Router();
const { PesertaController } = require("../controller");

route.get("/", PesertaController.getPeserta);
route.get("/:id", PesertaController.getPesertaById);

module.exports = route;
