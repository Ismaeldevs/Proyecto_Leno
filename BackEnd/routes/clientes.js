const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allClientes, singleCliente,CreateClientes,UpdateClintes,DeleteClientes} = require("../controllers/clientes")

//peticiones http
router.get("/clientes/",allClientes)//muestra todo 
router.get("/cliente/:id", singleCliente)//para ver uno
router.post("/clientes/create",CreateClientes)
router.put("/clientess/edit/:id",UpdateClintes)
router.delete("/clientes/delete/:id",DeleteClientes)

module.exports = router