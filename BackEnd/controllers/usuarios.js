const {conection} = require("../config/database")


const allUsers = (req, res) => {
    const query = `select * from usuarios`
    conection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}

const singleUser = (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id
    const query = `select * from usuarios where id_usuario=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

const CreateUser = (req,res)=>{
const {usuario,clave,rol} = req.body
const query =`insert into usuarios (usuario,clave,rol) values ("${usuario}","${clave}",${rol})`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

const UpdateUser = (req,res)=>{
const {usuario,clave,rol} = req.body
const id = req.params.id
const query=`update usuarios set usuario = "${usuario}",clave = "${clave}",rol = ${rol} where id_usuario=${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

const DeleteUser = (req,res) =>{
const id = req.params.id
const query=`delete from usuarios where id_usuario=${id}`
conection.query(query,(err,results)=>{
if(err) throw err
res.send(results)
})
}

module.exports = {allUsers, singleUser,CreateUser,UpdateUser,DeleteUser}