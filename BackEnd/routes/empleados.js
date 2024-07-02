const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allEmpleados, singleEmpleado,createEmpleado,editEmpleado,deleteEmpleado} = require("../controllers/empleados")

//peticiones http
router.get("/empleados/",allEmpleados)//muestra todo 
router.get("/empleados/:id", singleEmpleado)//para ver uno
router.post("/empleados/create",createEmpleado)
router.put("/empleados/edit/:id",editEmpleado)
router.put("/empleados/delete/:id",deleteEmpleado)

module.exports = router