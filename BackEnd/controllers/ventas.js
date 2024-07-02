const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allVentas = (req,res) =>{
    const query = "SELECT * FROM Ventas"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleVentas = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `SELECT * FROM Ventas where id_Venta = ${id}`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createVentas = (req,res) =>{
const {id_Producto,id_Cliente,id_DetallePedido,fechaVenta,cantidadVenta,descuentoVenta,tipoPagoVenta,totalVenta} = req.body

    const query = `INSERT INTO Ventas (id_Producto,id_Cliente,id_DetallePedido,fechaVenta,cantidadVenta,descuentoVenta,tipoPagoVenta,totalVenta) values (${id_Producto},${id_Cliente},${id_DetallePedido},${fechaVenta},${cantidadVenta},${descuentoVenta},"${tipoPagoVenta}",${totalVenta})`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editVentas = (req,res) =>{
    const {id_Producto,id_Cliente,id_DetallePedido,fechaVenta,cantidadVenta,descuentoVenta,tipoPagoVenta,totalVenta} = req.body
    const id = req.params.id
    const query = `update Ventas set id_Producto=${id_Producto},id_Cliente=${id_Cliente},id_DetallePedido=${id_DetallePedido},fechaVenta=${fechaVenta},cantidadVenta=${cantidadVenta},descuentoVenta=${descuentoVenta},tipoPagoVenta="${tipoPagoVenta}",totalVenta=${totalVenta} where id_Venta=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteVentas = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM Ventas where id_Venta= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allVentas,singleVentas,createVentas,editVentas,deleteVentas}