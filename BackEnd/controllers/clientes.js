const { conection } = require("../config/database");

const allClientes = (req,res) =>{
    const query = "select * from clientes"
    conection.query(query,(err,results)=>{
        if(err) throw err 
        res.json(results)
    })
}

const singleCliente = (req,res)=>{
    const id = req.params.id
    const query=`select * from clientes where id_cliente= ${id}`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const CreateClientes = (req,res)=>{
    const {nombreCompleto,dni,telefono,direccion,activo} = req.body
    const query = `insert into clientes (nombreCompleto,dni,telefono,direccion,activo) values ("${nombreCompleto}","${dni}","${telefono}","${direccion}",${activo});`
    conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

const UpdateClintes=(req,res)=>{
const id = req.params.id
const {nombreCompleto,dni,telefono,direccion,activo} = req.body
const query = `update clientes set nombreCompleto = "${nombreCompleto}", dni = "${dni}", telefono ="${telefono}",direccion = "${direccion}",activo = ${activo} where  id_cliente= ${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})}

const DeleteClientes=(req,res)=>{
    const id = req.params.id
    const query = `delete from clientes where id_cliente= ${id}`
    conection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allClientes, singleCliente,CreateClientes,UpdateClintes,DeleteClientes}