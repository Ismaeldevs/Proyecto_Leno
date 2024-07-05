
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
      <br />
      <div className='container-CRUD'>
      <br />
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                <p className="titleCRUD">CREAR UN USUARIO</p>
                    <FormGroup>
                        <Tooltip title="Nombre del Usuario">
                            <FormControl type='text' placeholder='Usuario' value={usuario.usuario} className="crud input" onChange={handleChange} name="usuario"  required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Clave ">
                            <FormControl type='text' placeholder='Clave' value={usuario.clave} className="crud input" onChange={handleChange} name="clave"  required />
                        </Tooltip>
                        <br />
                        <Tooltip title="ROL">
                        <FormControl
              as="select"
              placeholder="Rol"
              className="crud input"
              onChange={handleChange}
              name="rol"
              required
           >

              <option value={0}>Empleado</option>
              <option value={1}>Administrador</option>
           
              </FormControl>
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <div>
          <Button type="submit" className="btnCRUD">
            Crear Usuario
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

export default CreateUser
