import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTE_CREAR } from '../../../../Constats/endpoints'

const CreateClient = () => {

    const navigate = useNavigate()

    const initialState = {
        nombreCompleto: "",
        dni: "",
        telefono: "",
        direccion: "",
        activo: 0
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [client, setClient] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_CLIENTE_CREAR}`, {
                nombreCompleto: client.nombreCompleto,
                dni: client.dni,
                telefono: client.telefono,
                direccion: client.direccion,
                activo: client.activo
            })
            if(response.status === 200) {
                alert("Cliente Creado!")
                navigate('/clientes')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleChange = (e) => {
        setClient({
            ...client, [e.target.name] : e.target.value
        })
    }

  return (
    <div>
      <h1 className="p-5 text-white text-center">CREAR CLIENTE</h1>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='text' placeholder='Nombre Completo' onChange={handleChange} name="nombreCompleto" />
                <br />
                <FormControl type='text' placeholder='DNI' onChange={handleChange} name="dni" />
                <br />
                <FormControl type='text' placeholder='Telefono' onChange={handleChange}  name="telefono" />
                <br />
                <FormControl type='text' placeholder='Direccion' onChange={handleChange} name="direccion" />
                <br />
                <FormControl type='number' placeholder='Activo ó No (0 / 1)' onChange={handleChange} name="activo" />
                <br />
            </FormGroup>
            <Button type='submit'>Crear Cliente</Button>
        </Form>
</div>
    </div>
  )
}

export default CreateClient
