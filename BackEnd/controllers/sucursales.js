const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allSucursales = (req,res) =>{
    const query = "SELECT * FROM sucursales"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleSucursales = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM sucursales where id_sucursal = ${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createSucursales = (req,res) =>{
const {nombre,numeroSucursal,direccion,zonaAlcance,imagenSucursales,telefono} = req.body

    const query = `INSERT INTO sucursales (nombre,numeroSucursal,direccion,zonaAlcance,imagenSucursales,telefono) values ("${nombre}",${numeroSucursal},"${direccion}","${zonaAlcance}","${imagenSucursales}","${telefono}")`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editSucursales = (req,res) =>{
    const {nombre,numeroSucursal,direccion,zonaAlcance,imagenSucursales,telefono} = req.body
    const id = req.params.id
    const query = `update sucursales set nombre="${nombre}",numeroSucursal=${numeroSucursal},direccion="${direccion}",zonaAlcance="${zonaAlcance}",imagenSucursales="${imagenSucursales}",telefono="${telefono}" where id_sucursal=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteSucursales = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM sucursales where id_sucursal= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allSucursales,singleSucursales,createSucursales,editSucursales,deleteSucursales}