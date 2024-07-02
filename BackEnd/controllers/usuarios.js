const {conection} = require("../config/database")


const allUsers = (req, res) => {
    const query = `select * from Usuarios`
    conection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}

const singleUser = (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id
    const query = `select * from Usuarios where id_Usuario=${id}`
    conection.query(query, (err,results) => {
        if(err) throw err
        res.send(results)
    })
}

const CreateUser = (req,res)=>{
const {usuario,clave,rol} = req.body
const query =`insert into Usuarios (usuario,clave,rol) values ("${usuario}","${clave}",${rol})`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

const UpdateUser = (req,res)=>{
const {usuario,clave,rol} = req.body
const id = req.params.id
const query=`update Usuarios set usuario = "${usuario}",clave = "${clave}",rol = ${rol} where id_Usuario=${id}`
conection.query(query,(err,results)=>{
    if(err) throw err
    res.send(results)
})
}

const DeleteUser = (req,res) =>{
const id = req.params.id
const query=`delete from Usuarios where id_Usuario=${id}`
conection.query(query,(err,results)=>{
if(err) throw err
res.send(results)
})
}

module.exports = {allUsers, singleUser,CreateUser,UpdateUser,DeleteUser}