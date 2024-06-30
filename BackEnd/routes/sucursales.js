const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allSucursales,singleSucursales,createSucursales,editSucursales,deleteSucursales} = require("../controllers/sucursales")

//peticiones http
router.get("/sucursales/",allSucursales)//muestra todo 
router.get("/sucursal/:id", singleSucursales)//para ver uno
router.post("/sucursales/create",createSucursales)
router.put("/sucursales/edit/:id",editSucursales)
router.delete("/sucursales/delete/:id",deleteSucursales)

module.exports = router