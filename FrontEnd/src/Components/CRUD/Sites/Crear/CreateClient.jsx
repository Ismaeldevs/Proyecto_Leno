import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import { Tooltip } from '@mui/material';

// import { URL_CLIENTE_CREAR } from '../../../../Constats/endpoints'

const CreateClient = () => {

    const navigate = useNavigate()

    const initialState = {
        nombreCliente: "",
        apellidoCliente:"",
        dniCliente: "",
        telefonoCliente: "",
        direccionCliente: "",
        activoCliente: 0
    }
    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value })
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [client, setClient] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.post("http://localhost:8000/clientes/create", {
                nombreCliente: client.nombreCliente,
                apellidoCliente: client.apellidoCliente,
                dniCliente: client.dniCliente,
                telefonoCliente: client.telefonoCliente,
                direccionCliente: client.direccionCliente,
                activoCliente: client.activoCliente
            })

            if (response.status === 200) {
                alert("Cliente Creado!")
                navigate('/clientes')
            }
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div>
      <h1 className="p-5 text-white text-center">CREAR CLIENTE</h1>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='text' placeholder='Nombre' onChange={handleChange} name="nombreCliente" />
                <br />
                <FormControl type='text' placeholder='Apellido' onChange={handleChange} name="apellidoCliente" />
                <br />
                <FormControl type='text' placeholder='DNI' onChange={handleChange} name="dniCliente" />
                <br />
                <FormControl type='text' placeholder='Telefono' onChange={handleChange}  name="telefonoCliente" />
                <br />
                <FormControl type='text' placeholder='Direccion' onChange={handleChange} name="direccionCliente" />
                <br />
            </FormGroup>
            <Button type='submit'>Crear Cliente</Button>
        </Form>
</div>


        </div>
    )
}

export default CreateClient
