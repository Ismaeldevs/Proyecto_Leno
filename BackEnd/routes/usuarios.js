const express = require("express")
const {allUsers, singleUser,CreateUser,UpdateUser,DeleteUser} = require("../controllers/usuarios")

const router = express.Router()

//peticiones http
router.get("/usuarios", allUsers)
router.get("/usuarios/:id", singleUser)
router.post("/usuarios/create", CreateUser)
router.put("/usuarios/edit/:id", UpdateUser)
router.delete("/usuarios/delete/:id", DeleteUser)

module.exports = router