const {conection} = require("../config/database")


const allClientes = (req, res) => {
    const query = `select * from clientes`
    conection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}

const singleCliente = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const query = `select * from clientes where id_clientes=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allClientes, singleCliente}