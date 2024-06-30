const {conection} = require("../config/database")


const allUsers = (req, res) => {
    const query = `select * from usuarios`
    conection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}

const singleUser = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const query = `select * from usuarios where id_usuario=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allUsers, singleUser}