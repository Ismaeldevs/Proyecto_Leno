const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allProductos = (req,res) =>{
    const query = "SELECT * FROM Productos"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleProductos = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM Productos where id_Producto =${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createProductos = (req,res) =>{
const {nombreProducto,descripcionProducto,tipoProducto,precioProducto,imagenProducto,disponibilidadProducto} = req.body

    const query = `INSERT INTO Productos (nombreProducto,descripcionProducto,tipoProducto,precioProducto,imagenProducto,disponibilidadProducto) values ("${nombreProducto}","${descripcionProducto}","${tipoProducto}",${precioProducto},"${imagenProducto}",${disponibilidadProducto})`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editProductos = (req,res) =>{
    const {nombreProducto,descripcionProducto,tipoProducto,precioProducto,imagenProducto,disponibilidadProducto} = req.body
    const id = req.params.id
    const query = `update Productos set nombreProducto="${nombreProducto}",descripcionProducto="${descripcionProducto}",tipoProducto="${tipoProducto}",precioProducto=${precioProducto},imagenProducto="${imagenProducto}",disponibilidadProducto=${disponibilidadProducto} where id_Producto=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteProductos = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM Productos where id_Producto = ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allProductos,singleProductos,createProductos,editProductos,deleteProductos}