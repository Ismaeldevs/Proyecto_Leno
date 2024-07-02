const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos los empleados de la tabla empleado
const allDetallePedido = (req,res) =>{
    const query = `select id_DetallePedido, P.nombreProducto as NombreProducto, concat(C.nombreCliente, " " , C.apellidoCliente) as NombreCompletoCliente, S.nombreSucursal as NombreSucursal, concat(E.nombreEmpleado, " ", E.apellidoEmpleado) as NombreCompletoEmpleado, D.fechaDetallePedido from DetallePedidos D join Productos P on D.id_Producto = P.id_Producto join Clientes C on C.id_Cliente = D.id_Cliente join Sucursales S on S.id_Sucursal = D.id_Sucursal join Empleados E on E.id_Empleado = D.id_Empleado;`
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un empleado en especifico
const singleDetallePedido = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `select id_DetallePedido,P.nombreProducto as NombreProducto, concat(C.nombreCliente, " " , C.apellidoCliente) as NombreCompletoCliente,S.nombreSucursal as NombreSucursal, concat(E.nombreEmpleado, " " , E.apellidoEmpleado) as NombreCompletoEmpleado, D.fechaDetallePedido from DetallePedidos D join Productos P on D.id_Producto = P.id_Producto join Clientes C on C.id_Cliente = D.id_Cliente join Sucursales S on S.id_Sucursal = D.id_Sucursal join Empleados E on E.id_Empleado = D.id_empleado where id_DetallePedido = ${id}`;

    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}
// funcion para crear un empleado
const createDetallePedido = (req,res) =>{
const {id_Producto,id_Cliente,id_Sucursal,id_Empleado,fechaDetallePedido} = req.body

    const query = `INSERT INTO DetallePedidos (id_Producto,id_Cliente,id_Sucursal,id_Empleado,fechaDetallePedido) values (${id_Producto},${id_Cliente},${id_Sucursal},${id_Empleado},"${fechaDetallePedido}")`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}

    // funcion para editar un empleado de la tabla
const editDetallePedido = (req,res) =>{
    const {id_Producto,id_Cliente,id_Sucursal,id_Empleado,fechaDetallePedido} = req.body
    const id = req.params.id
    const query = `update DetallePedidos set id_Producto=${id_Producto},id_Cliente=${id_Cliente},id_Sucursal=${id_Sucursal},id_Empleado=${id_Empleado},fechaDetallePedido="${fechaDetallePedido} where id_DetallePedido=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un empleado
const deleteDetallePedido = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM DetallePedidos where id_DetallePedido= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allDetallePedido,singleDetallePedido,createDetallePedido,editDetallePedido,deleteDetallePedido}