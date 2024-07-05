
import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const CreateUser = () => {

    const navigate = useNavigate()

    const initialState = {
        usuario: "",
        clave: "",
        rol: 0,
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [usuario, setUsuario] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_USUARIO_CREAR}`, {
                usuario: usuario.usuario,
                clave: usuario.clave,
                rol: usuario.rol,
            })
            if (response.status === 200) {
                alert("Usuario Creado!")
                navigate('/usuarios')

            }

        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="p-5 text-white text-center">CREAR Usuario</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Usuario">
                            <FormControl type='text' placeholder='Usuario' value={usuario.usuario} onChange={handleChange} name="usuario" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Clave ">
                            <FormControl type='text' placeholder='Clave' value={usuario.clave} onChange={handleChange} name="clave" />
                        </Tooltip>
                        <br />
                        <Tooltip title="ROL">
                            <FormControl type='number' placeholder='Rol' value={usuario.rol} onChange={handleChange} name="rol" />
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Crear Usuario</Button>
                    <Link to={'/usuarios'} className='btn text-white bg-danger '>Volver a Usuarios</Link>

                </Form>
            </div>
        </div>
    )
}

export default CreateUser
