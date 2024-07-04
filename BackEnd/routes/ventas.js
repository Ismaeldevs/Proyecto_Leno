const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allVentas,singleVentas,createVentas,editVentas,deleteVentas} = require("../controllers/ventas")

//peticiones http
router.get("/ventas",allVentas)//muestra todo 
router.get("/ventas/:id", singleVentas)//para ver uno
router.post("/ventas/create",createVentas)
router.put("/ventas/edit/:id",editVentas)
router.put("/ventas/delete/:id",deleteVentas)

module.exports = router