const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allEmpleados = (req,res) =>{
    const query = "SELECT * FROM empleados"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleEmpleado = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = "SELECT * FROM empleados where id_empleado = ${id}"
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createEmpleado = (req,res) =>{
const {id_sucursal,nombreCompleto,cuil,telefono,mail,direccion} = req.body

    const query = `INSERT INTO empleados (id_sucursal,nombreCompleto,cuil,telefono,mail,direccion) values (${id_sucursal},"${nombreCompleto}","${cuil}","${telefono}","${mail}","${direccion}")`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editEmpleado = (req,res) =>{
    const {id_sucursal,nombreCompleto,cuil,telefono,mail,direccion,rolAdmin} = req.body
    const id = req.params.id
    const query = `update empleados set id_sucursal=${id_sucursal},nombreCompleto="${nombreCompleto}",cuil="${cuil}",telefono="${telefono}",mail="${mail}",direccion="${direccion}",rolAdmin=${rolAdmin} where id_empleado=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteEmpleado = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM empleados where id_empleado = ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allEmpleados,singleEmpleado,createEmpleado,editEmpleado,deleteEmpleado}