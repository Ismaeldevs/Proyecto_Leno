const express = require('express');
const {conection} = require('./config/database')
const usuarios = require("./routes/usuarios")
const cors = require('cors');

const app = express()
const port = 8000;
app.use(cors())
app.use("/", usuarios)
app.use(express.json())


conection.connect(() => {
    console.log("Base de datos conectada ✓")
})

app.get("/", (req, res) => {
    console.log("API FUNCIONANDO")
    res.send({message: "API - LENO ARGENTINA"})
})

app.listen(port, () => {
    console.log(`🔝 Escuchando en el puerto ${port}\n 🔹 Ingresar: http://localhost:${port}/`)
})