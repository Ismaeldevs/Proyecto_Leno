const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allProductos = (req,res) =>{
    const query = "SELECT * FROM productos"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleProductos = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM productos where id_producto = ${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createProductos = (req,res) =>{
const {nombre,descripcion,tipo,precio,imagenProductos,disponibilidad} = req.body

    const query = `INSERT INTO empleados (nombre,descripcion,tipo,precio,imagenProductos,disponibilidad) values ("${nombre}","${descripcion}","${tipo}",${precio},"${imagenProductos}",${disponibilidad})`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editProductos = (req,res) =>{
    const {nombre,descripcion,tipo,precio,imagenProductos,disponibilidad} = req.body
    const id = req.params.id
    const query = `update productos set nombre="${nombre}",descripcion="${descripcion}",tipo="${tipo}",precio=${precio},imagenProducto="${imagenProductos}",disponibilidad=${disponibilidad} where id_producto=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteProductos = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM productos where id_producto= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allProductos,singleProductos,createProductos,editProductos,deleteProductos}