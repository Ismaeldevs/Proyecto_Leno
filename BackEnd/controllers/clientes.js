const {conection} = require("../config/database")


const allClients = (req, res) => {
    const query = `select * from Clientes where activoCliente=1`
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
    const {nombreCliente,apellidoCliente, dniCliente, telefonoCliente, direccionCliente} = req.body

    const query = `insert into Clientes (nombreCliente, apellidoCliente, dniCliente, telefonoCliente, direccionCliente, activoCliente) values("${nombreCliente}","${apellidoCliente}","${dniCliente}","${telefonoCliente}","${direccionCliente}",1)`
    conection.query(query, (err,results) => {
        if(err) throw err 
        res.send(results)
    })
}

const editClient = (req, res) => {
    const id = req.params.id
    console.log(req.body);
    const {nombreCliente,apellidoCliente, dniCliente, telefonoCliente, direccionCliente} = req.body
    const query = `update Clientes set nombreCliente="${nombreCliente}",apellidoCliente="${apellidoCliente}", dniCliente="${dniCliente}",telefonoCliente="${telefonoCliente}",direccionCliente="${direccionCliente}",activoCliente=1 where id_Cliente=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

const eraseClient = (req, res) => {
    const id = req.params.id
    const query = `update Clientes set activoCliente=0 where id_Cliente=${id}`
    conection.query(query, (err,results) => {

        if(err) throw err
        res.send(results)
    })
}

module.exports = {allClients, singleClient,createClient,editClient,eraseClient}