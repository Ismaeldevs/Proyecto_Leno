const {conection} = require("../config/database")

// estas funciones traen datos de la base de datos
// funcion para mostrar todos stock de la tabla stocks
const allStock = (req,res) =>{
    const query = "select id_Stock, P.nombreProducto as NombreProducto, S.cantidadStock,S.fechaRegistroStock, SU.nombreSucursal as nombreSucursal from Productos P join Stocks S on P.id_Producto = S.id_Producto join Sucursales SU on SU.id_Sucursal = S.id_Sucursal;"
    conection.query(query,(err,results)=>{
        if(err) throw err;
        res.json(results)
    })
}
// funcion para mostrar un stock en especifico
const singleStock = (req,res) => {

    const id = req.params.id
// creacion de la consulta(query) en una constante
    const query = `select id_Stock, P.nombreProducto as NombreProducto, S.cantidadStock,S.fechaRegistroStock, SU.nombreSucursal as nombreSucursal from Productos P join Stocks S on P.id_Producto = S.id_Producto join Sucursales SU on SU.id_Sucursal = S.id_Sucursal where id_stock = ${id};`
    // realizo la conexion por medio de la query 
    conection.query(query,(err,results)=>{
        if(err) throw err //verifico si existe algun error 
        res.json(results) //guardo en un json 
    })

}



// funcion para crear un nuevo stock
const createStock = (req,res) =>{
const {id_Producto,id_Sucursal,fechaRegistroStock,cantidadStock, descripcionStock} = req.body
    const query = `INSERT INTO Stocks (id_Producto,id_Sucursal,fechaRegistroStock,cantidadStock,descripcionStock) values (${id_Producto},${id_Sucursal},'${fechaRegistroStock}',${cantidadStock}, "${descripcionStock}")`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
})}


    // funcion para editar el stock de la tabla
const editStock = (req,res) =>{
    const {id_Producto,id_Sucursal,fechaRegistroStock,cantidadStock} = req.body
    const id = req.params.id
    const query = `update Stocks set id_Producto=${id_producto}, id_Sucursal=${id_Sucursal}, cantidadStock=${cantidadStock},fechaRegistroStock="${fechaRegistroStock}" where id_Stock=${id}`
 conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
 })
}
// funcion para eleminar un stock
const deleteStock = (req,res) =>{
const id = req.params.id
const query=`DELETE FROM Stocks where id_Stock = ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

// exporto las funciones
module.exports = {allStock,singleStock,createStock,editStock,deleteStock}