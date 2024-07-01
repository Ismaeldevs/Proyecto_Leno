const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allProductos,singleProductos,createProductos,editProductos,deleteProductos} = require("../controllers/productos")

//peticiones http
router.get("/productos/",allProductos)//muestra todo 
router.get("/productos/:id", singleProductos)//para ver uno
router.post("/productos/create",createProductos)
router.put("/productos/edit/:id",editProductos)
router.delete("/productos/delete/:id",deleteProductos)

module.exports = router