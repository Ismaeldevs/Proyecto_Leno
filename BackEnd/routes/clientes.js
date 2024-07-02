const express = require("express")
const {allClients, singleClient, createClient,editClient,eraseClient} = require("../controllers/clientes")

const router = express.Router()

router.get("/clientes", allClients)
router.get("/clientes/:id", singleClient)
router.post("/clientes/create/", createClient)
router.put("/clientes/edit/:id", editClient)
router.put("/clientes/delete/:id", eraseClient)


module.exports = router