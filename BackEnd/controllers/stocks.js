const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos stock de la tabla stocks
const allStock = (req,res) =>{

    const query = "select id_Stock, P.nombreProducto, S.id_Producto,S.id_Sucursal,S.cantidadStock,S.fechaRegistroStock, SU.nombreSucursal from Productos P join Stocks S on P.id_Producto = S.id_Producto join Sucursales SU on SU.id_Sucursal = S.id_Sucursal where activoStock=1;"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un stock en especifico
const singleStock = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `select id_Stock, P.nombreProducto as NombreProducto, S.cantidadStock,S.fechaRegistroStock,S.descripcionStock, SU.nombreSucursal as nombreSucursal from Productos P join Stocks S on P.id_Producto = S.id_Producto join Sucursales SU on SU.id_Sucursal = S.id_Sucursal where id_stock = ${id};`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}



// funcion para crear un nuevo stock
const createStock = (req,res) =>{
const {id_Producto,id_Sucursal,fechaRegistroStock,cantidadStock, descripcionStock} = req.body
    const query = `INSERT INTO Stocks (id_Producto,id_Sucursal,fechaRegistroStock,cantidadStock,descripcionStock,activoStock) values (${id_Producto},${id_Sucursal},'${fechaRegistroStock}',${cantidadStock}, "${descripcionStock}", 1)`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}


    // funcion para editar el stock de la tabla
const editStock = (req,res) =>{
    const {fechaRegistroStock,cantidadStock,descripcionStock} = req.body
    const id = req.params.id
    const query = `UPDATE Stocks S JOIN Productos P ON P.id_Producto = S.id_Producto JOIN Sucursales SU ON SU.id_Sucursal = S.id_Sucursal set  S.fechaRegistroStock="${fechaRegistroStock}",S.cantidadStock=${cantidadStock},S.descripcionStock="${descripcionStock}",S.activoStock=1 where S.id_Stock=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un stock
const deleteStock = (req,res) =>{
const id = req.params.id
const query=`update Stocks set activoStock=0 where id_Stock=${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allStock,singleStock,createStock,editStock,deleteStock}