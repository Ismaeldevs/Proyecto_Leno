const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allEmpleados = (req,res) =>{
    const query = `select E.id_Empleado, S.nombreSucursal as NombreSucursal, E.nombreEmpleado,E.apellidoEmpleado,  E.cuilEmpleado, E.telefonoEmpleado, E.mailEmpleado, E.direccionEmpleado from Empleados E join Sucursales S on E.id_sucursal = S.id_Sucursal where activoEmpleado=1`
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleEmpleado = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM Empleados where id_Empleado=${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createEmpleado = (req,res) =>{
const {id_Sucursal,nombreEmpleado, apellidoEmpleado,cuilEmpleado,telefonoEmpleado,mailEmpleado,direccionEmpleado} = req.body

    const query = `INSERT INTO Empleados (id_Sucursal,nombreEmpleado,cuilEmpleado,telefonoEmpleado,mailEmpleado,direccionEmpleado,activoEmpleado) values (${id_Sucursal},"${nombreEmpleado}","${apellidoEmpleado}","${cuilEmpleado}","${telefonoEmpleado}","${mailEmpleado}","${direccionEmpleado}",1)`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editEmpleado = (req,res) =>{
    const {id_Sucursal,nombreEmpleado, apellidoEmpleado,cuilEmpleado,telefonoEmpleado,mailEmpleado,direccionEmpleado} = req.body
    const id = req.params.id
    const query = `update Empleados set id_Sucursal="${id_Sucursal}", nombreEmpleado="${nombreEmpleado}",apellidoEmpleado="${apellidoEmpleado}",cuilEmpleado="${cuilEmpleado}",telefonoEmpleado="${telefonoEmpleado}",mailEmpleado="${mailEmpleado}",direccionEmpleado="${direccionEmpleado}",activoEmpleado=1 where id_Empleado=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteEmpleado = (req,res) =>{
const id = req.params.id
const query=`update Empleados set activoEmpleado=0 where id_Empleado=${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allEmpleados,singleEmpleado,createEmpleado,editEmpleado,deleteEmpleado}