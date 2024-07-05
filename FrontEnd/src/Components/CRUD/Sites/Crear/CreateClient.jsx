import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import { Tooltip } from '@mui/material';
import '../../../../CSS/CRUD/Form.css'

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
            <br />
            <div className='container-CRUD'>
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                    <p className="titleCRUD">CREAR UN CLIENTE</p>
                    <FormGroup>
                        <Tooltip title="Nombre del Cliente">
                            <FormControl type='text' placeholder='Nombre' className="crud input" onChange={handleChange} name="nombreCliente" required/>
                        </Tooltip>
                        <br />
                        <Tooltip title="Apellido del Cliente">
                            <FormControl type='text' placeholder='Apellido' className="crud input" onChange={handleChange} name="apellidoCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="DNI del Cliente">
                            <FormControl type='text' placeholder='DNI' className="crud input" onChange={handleChange} name="dniCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono del Cliente">
                            <FormControl type='text' placeholder='Telefono' className="crud input" onChange={handleChange} name="telefonoCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion del Cliente">
                            <FormControl type='text' placeholder='Direccion' className="crud input" onChange={handleChange} name="direccionCliente" required />
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <div>
                        <Button type='submit' className="btnCRUD">Crear Cliente</Button>
                    </div>
                    <div>
                        <br />
                        <button className="btnBack"><Link to={'/clientes'} className='text-decoration-none text-white'>Volver a Clientes</Link></button>
                    </div>
                </Form>
            </div>


        </div>
    )
}

export default CreateClient
