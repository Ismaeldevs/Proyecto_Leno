const express = require("express")

const router = express.Router()// metodo propio de express que tiene el enrutamiento

const {allStock,singleStock,createStock,editStock,deleteStock} = require("../controllers/stocks")

//peticiones http
router.get("/stocks/",allStock)//muestra todo 
router.get("/stock/:id", singleStock)//para ver uno
router.post("/stocks/create",createStock)
router.put("/stocks/edit/:id",editStock)
router.delete("/stocks/delete/:id",deleteStock)

module.exports = router