const express = require("express")
const {allUsers, singleUser,CreateUser,UpdateUser,DeleteUser} = require("../controllers/usuarios")

const router = express.Router()

//peticiones http
router.get("/usuarios", allUsers)
router.get("/usuarios/:id", singleUser)
router.get("/usuarios/create", CreateUser)
router.get("/usuarios/update/:id", UpdateUser)
router.get("/usuarios/delete/:id", DeleteUser)

module.exports = router