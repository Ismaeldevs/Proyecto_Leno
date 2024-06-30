const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allVentas = (req,res) =>{
    const query = "SELECT * FROM ventas"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleVentas = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM ventas where id_venta = ${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createVentas = (req,res) =>{
const {id_producto,id_cliente,id_detallePedido,fecha,cantidad,descuento,tipoPago,total} = req.body

    const query = `INSERT INTO ventas (id_producto,id_cliente,id_detallePedido,fecha,cantidad,descuento,tipoPago,total) values (${id_producto},${id_cliente},${id_detallePedido},${fecha},${cantidad},${descuento},"${tipoPago}",${total})`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editVentas = (req,res) =>{
    const {id_producto,id_cliente,id_detallePedido,fecha,cantidad,descuento,tipoPago,total} = req.body
    const id = req.params.id
    const query = `update ventas set id_producto=${id_producto},id_cliente=${id_cliente},id_detallePedido=${id_detallePedido},fecha=${fecha},cantidad=${cantidad},descuento=${descuento},tipoPago="${tipoPago}",total=${total} where id_venta=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteVentas = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM ventas where id_venta= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allVentas,singleVentas,createVentas,editVentas,deleteVentas}