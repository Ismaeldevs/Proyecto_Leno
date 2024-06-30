const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allDetallePedido,singleDetallePedido,createDetallePedido,editDetallePedido,deleteDetallePedido} = require("../controllers/detallePedidos")

//peticiones http
router.get("/detallePedidos/",allDetallePedido)//muestra todo 
router.get("/detallePedido/:id", singleDetallePedido)//para ver uno
router.post("/detallePedidos/create",createDetallePedido)
router.put("/detallePedidos/edit/:id",editDetallePedido)
router.delete("/detallePedidos/delete/:id",deleteDetallePedido)

module.exports = router