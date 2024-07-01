
import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO_CREAR } from '../../../../Constats/endpoints'

const CreateUser = () => {

    const navigate = useNavigate()

    const initialState = {
        usuario: "",
        clave: "",
        rol: 0 ,
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
            if(response.status === 200) {
                alert("Usuario Creado!")
                navigate('/usuarios')

            }
          
        } catch (error) {
            console.log(error) 
        }
        
    }

    const handleChange = (e) => {
        setUsuario({
            ...usuario, [e.target.name] : e.target.value
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
                <FormControl type='text' placeholder='Usuario' value={usuario.usuario} onChange={handleChange} name="usuario"  />
                <br />
                <FormControl type='text' placeholder='Clave' value={usuario.clave} onChange={handleChange} name="clave"  />
                <br />
                <FormControl type='number' placeholder='Rol' value={usuario.rol} onChange={handleChange}  name="rol" />
                <br />
                
            </FormGroup>
            <Button type='submit'>Crear Usuario</Button>
        </Form>
</div>
    </div>
  )
}

export default CreateUser
