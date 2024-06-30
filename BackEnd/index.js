const express = require('express');
const {conection} = require('./config/database')
const usuarios = require("./routes/usuarios")
const empleados = require("./routes/empleados")
const sucursales = require("./routes/sucursales")
const stocks = require("./routes/stocks")
const clientes = require("./routes/clientes")
const productos = require("./routes/productos")
const ventas = require("./routes/ventas")
const detallePedidos = require("./routes/detallePedidos")

const cors = require('cors');

const app = express()
const port = 8000;
app.use(cors())
app.use("/", usuarios,empleados,ventas,productos,clientes,detallePedidos,stocks,sucursales)
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