const express = require("express")
const {allUsers, singleUser} = require("../controllers/usuarios")

const router = express.Router()

router.get("/usuarios", allUsers)
router.get("/usuarios/:id", singleUser)


module.exports = router