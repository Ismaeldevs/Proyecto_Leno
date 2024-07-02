const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allDetallePedido,singleDetallePedido,createDetallePedido,editDetallePedido,deleteDetallePedido} = require("../controllers/detallePedidos")

//peticiones http
router.get("/pedidos/",allDetallePedido)//muestra todo 
router.get("/pedidos/:id", singleDetallePedido)//para ver uno
router.post("/pedidos/create",createDetallePedido)
router.put("/pedidos/edit/:id",editDetallePedido)
router.put("/pedidos/delete/:id",deleteDetallePedido)

module.exports = router