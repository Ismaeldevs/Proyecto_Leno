const {conection} = require("../config/database")


const allClients = (req, res) => {
    const query = `select * from Clientes`
    conection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}

const singleClient = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const query = `select * from Clientes where id_Cliente=${id}`
    conection.query(query, (err,results) => {

        if(err) throw err
        res.send(results)
    })
}
const createClient = (req, res) => {
    const {nombreCliente,apellidoCliente, dniCliente, telefonoCliente, direccionCliente, activo} = req.body

    const query = `insert into Clientes (nombreCliente, apellidoCliente, dniCliente, telefonoCliente, direccionCliente, activo) values("${nombreCliente}","${apellidoCliente}","${dniCliente}","${telefonoCliente}","${direccionCliente}",${activo})`
    conection.query(query, (err,results) => {
        if(err) throw err 
        res.send(results)
    })
}

const editClient = (req, res) => {
    const id = req.params.id
    console.log(req.body);
    const {nombreCliente,apellidoCliente, dniCliente, telefonoCliente, direccionCliente, activo} = req.body
    const query = `update Clientes set nombreCliente="${nombreCliente}",apellidoCliente="${apellidoCliente}", dniCliente="${dniCliente}",telefonoCliente="${telefonoCliente}",direccionCliente="${direccionCliente}",activo=${activo} where id_Cliente=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

const eraseClient = (req, res) => {
    const id = req.params.id
    const query = `delete from Clientes where id_Cliente=${id}`
    conection.query(query, (err,results) => {

        if(err) throw err
        res.send(results)
    })
}

module.exports = {allClients, singleClient,createClient,editClient,eraseClient}