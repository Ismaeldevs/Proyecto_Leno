const express = require("express")
const {allClientes, singleCliente} = require("../controllers/clientes")

const router = express.Router()


router.get("/clientes/:id", singleCliente)
router.get("/clientes", allClientes)


module.exports = router