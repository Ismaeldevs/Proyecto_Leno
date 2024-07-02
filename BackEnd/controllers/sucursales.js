const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allSucursales = (req,res) =>{
    const query = "SELECT * FROM Sucursales where activoSucursal=1"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleSucursales = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM Sucursales where id_Sucursal = ${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createSucursales = (req,res) =>{
const {nombreSucursal,numeroSucursal,direccionSucursal,zonaAlcance,imagenSucursale,telefonoSucursal} = req.body

    const query = `INSERT INTO Sucursales (nombreSucursal,numeroSucursal,direccionSucursal,zonaAlcance,imagenSucursale,telefonoSucursal,activoSucursal) values ("${nombreSucursal}",${numeroSucursal},"${direccionSucursal}","${zonaAlcance}","${imagenSucursale}","${telefonoSucursal}",1)`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editSucursales = (req,res) =>{
    const {nombreSucursal,numeroSucursal,direccionSucursal,zonaAlcance,imagenSucursale,telefonoSucursal} = req.body
    const id = req.params.id
    const query = `update Sucursales set nombreSucursal="${nombreSucursal}",numeroSucursal=${numeroSucursal},direccionSucursal="${direccionSucursal}",zonaAlcance="${zonaAlcance}",imagenSucursale="${imagenSucursale}",telefonoSucursal="${telefonoSucursal}",activoSucursal=1 where id_Sucursal=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteSucursales = (req,res) =>{
const id = req.params.id
const query=`update Sucursales set activoSucursal=0 where id_Sucursal=${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allSucursales,singleSucursales,createSucursales,editSucursales,deleteSucursales}