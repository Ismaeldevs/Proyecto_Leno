import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import { Tooltip } from '@mui/material';

// import { URL_CLIENTE_CREAR } from '../../../../Constats/endpoints'

const CreateClient = () => {

    const navigate = useNavigate()

    const initialState = {
        nombreCompleto: "",
        dni: "",
        telefono: "",
        direccion: "",
        activo: 0
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
                dni: client.dniCliente,
                telefono: client.telefonoCliente,
                direccion: client.direccionCliente
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
                        <Tooltip title="Nombre del Cliente">
                            <FormControl type='text' placeholder='Nombre ' onChange={handleChange} name="nombreCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Apellido del Cliente">
                            <FormControl type='text' placeholder='Apellido ' onChange={handleChange} name="apellidoCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="DNI del Cliente">
                            <FormControl type='text' placeholder='DNI' onChange={handleChange} name="dniCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono del Cliente">
                            <FormControl type='text' placeholder='Telefono' onChange={handleChange} name="telefonoCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion del Cliente">
                            <FormControl type='text' placeholder='Direccion' onChange={handleChange} name="direccionCliente" />
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <div>
                        <Button type='submit' className='btn btn-danger mx-2'>Crear Cliente</Button>
                        <Link to={'/clientes'} className='btn text-white bg-danger '>Volver a Clientes</Link>
                    </div>
                </Form>
            </div>


        </div>
    )
}

export default CreateClient
