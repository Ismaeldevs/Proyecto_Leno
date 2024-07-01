const {conection} = require("../config/database")


const allClients = (req, res) => {
    const query = `select * from clientes`
    conection.query(query, (err, results) => {
        if (err) throw err;

        res.json(results)
    })
}

const singleClient = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const query = `select * from clientes where id_cliente=${id}`
    conection.query(query, (err,results) => {

        if(err) throw err
        res.send(results)
    })
}


const createClient = (req, res) => {
    const {nombreCompleto, dni, telefono, direccion, activo} = req.body

    const query = `insert into clientes (nombreCompleto, dni, telefono, direccion, activo) values ('${nombreCompleto}','${dni}','${telefono}','${direccion}',${activo})`
    conection.query(query, (err,results) => {
        if(err) throw err 
        res.send(results)
    })
}

const editClient = (req, res) => {
    const id = req.params.id
    const {nombreCompleto, dni, telefono, direccion, activo} = req.body
    const query = `update clientes set nombreCompleto='${nombreCompleto}',dni='${dni}',telefono='${telefono}',direccion='${direccion}',activo=${activo} where id_cliente=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

const eraseClient = (req, res) => {
    const id = req.params.id
    const query = `delete from clientes where id_cliente=${id}`
    conection.query(query, (err,results) => {

        if(err) throw err
        res.send(results)
    })
}

module.exports = {allClients, singleClient,createClient,editClient,eraseClient}