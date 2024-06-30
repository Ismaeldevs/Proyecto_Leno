const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allStock = (req,res) =>{
    const query = "SELECT * FROM stocks"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleStock = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = "SELECT * FROM stocks where id_stock = ${id}"
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createStock = (req,res) =>{
const {id_producto,id_sucursal,fechaRegistro,cantidadStock,descripcion} = req.body

    const query = `INSERT INTO stocks (id_producto,id_sucursal,fechaRegistro,cantidadStock,descripcion) values (${id_producto},${id_sucursal},"${fechaRegistro}",${cantidadStock},"${descripcion}")`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editStock = (req,res) =>{
    const {id_producto,id_sucursal,fechaRegistro,cantidadStock,descripcion} = req.body
    const id = req.params.id
    const query = `update stocks set id_producto = ${id_producto},id_sucursal=${id_sucursal},fechaRegistro="${fechaRegistro}",cantidadStock=${cantidadStock},descripcion="${descripcion}" where id_stock=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteStock = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM stocks where id_stock = ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allStock,singleStock,createStock,editStock,deleteStock}