const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allDetallePedido = (req,res) =>{
    const query = "SELECT * FROM detallePedidos"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleDetallePedido = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = "SELECT * FROM detallePedidos where id_detallePedido = ${id}"
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createDetallePedido = (req,res) =>{
const {id_producto,id_cliente,id_sucursal,id_empleado,fecha} = req.body

    const query = `INSERT INTO detallePedidos (id_producto,id_cliente,id_sucursal,id_empleado,fecha) values (${id_producto},${id_cliente},${id_cliente},${id_sucursal},${id_empleado},${fecha})`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editDetallePedido = (req,res) =>{
    const {id_producto,id_cliente,id_sucursal,id_empleado,fecha} = req.body
    const id = req.params.id
    const query = `update detallePedidos set id_producto=${id_producto},id_cliente=${id_cliente},id_cliente=${id_cliente},id_sucursal=${id_sucursal},id_empleado=${id_empleado},fecha=${fecha} where id_detallePedido=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteDetallePedido = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM detallePedidos where id_detallePedido= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allDetallePedido,singleDetallePedido,createDetallePedido,editDetallePedido,deleteDetallePedido}