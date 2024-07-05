import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO, URL_USUARIO_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditUser = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        usuario: "",
        clave: "",
        rol: null,
    }


    const [usuario, setUsuario] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_USUARIO_EDITAR}${id}`, {
                usuario: usuario.usuario,
                clave: usuario.clave,
                rol: usuario.rol == "Admin" ? 1 : 0,
            })
            if (response.status === 200) {
                alert("Usuario Actualizado!")
                navigate('/usuarios')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_USUARIO}/${id}`)
        console.log(response.data)
        setUsuario(response.data[0])


    }

    const handleChange = (e) => {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div>
      <br />
      <div className="container-CRUD">
        <br />
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                    <p className="titleCRUD">EDITA UN USUARIO</p>
                    <FormGroup>
                        <Tooltip title="Nombre del Usuario">
                            <FormControl type='text' placeholder='Usuario' value={usuario.usuario} className="crud input" onChange={handleChange} name="usuario" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Clave">
                            <FormControl type='text' placeholder='Clave' value={usuario.clave} className="crud input" onChange={handleChange} name="clave" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="ROL">
                            <FormControl type='text' placeholder='Rol' value={usuario.rol == 1 ? "Admin" : "Empleado"} className="crud input" onChange={handleChange} name="rol" required />
                        </Tooltip>
                        <br />


                    </FormGroup>
                    <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Usuario
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/usuarios'} className='text-decoration-none text-white'>Volver a Usuarios</Link></button>
          </div>
                </Form>
            </div>
        </div>
    )
}

export default EditUser