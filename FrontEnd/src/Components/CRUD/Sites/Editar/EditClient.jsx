import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTES, URL_CLIENTE_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';
import '../../../../CSS/CRUD/Form.css'


const EditClient = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        nombreCliente: "",
        apellidoCliente: "",
        dniCliente: "",
        telefonoCliente: "",
        direccionCliente: "",
    }

    const [client, setClient] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_CLIENTE_EDITAR}${id}`, {
                nombreCliente: client.nombreCliente,
                apellidoCliente: client.apellidoCliente,
                dniCliente: client.dniCliente,
                telefonoCliente: client.telefonoCliente,
                direccionCliente: client.direccionCliente,
            })
            if (response.status === 200) {
                alert("Contacto Actualizado!")
                navigate('/clientes')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_CLIENTES}/${id}`)
        console.log(response.data)
        setClient(response.data[0])


    }

    const handleChange = (e) => {
        setClient({
            ...client, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div>
            <br />
            <div className='container-CRUD'>
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                <p className="titleCRUD">EDITAR UN CLIENTE</p>
                    <FormGroup>
                        <Tooltip title="Nombre del Cliente">
                            <FormControl type='text' placeholder='Nombre Cliente' className="crud input" value={client.nombreCliente} onChange={handleChange} name="nombreCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Apellido del Cliente">
                            <FormControl type='text' placeholder='Apellido Cliente' className="crud input" value={client.apellidoCliente} onChange={handleChange} name="apellidoCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="DNI del Cliente">
                            <FormControl type='text' placeholder='DNI' className="crud input" value={client.dniCliente} onChange={handleChange} name="dniCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono del Cliente">
                            <FormControl type='text' placeholder='Telefono' className="crud input" value={client.telefonoCliente} onChange={handleChange} name="telefonoCliente" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion del Cliente">
                            <FormControl type='text' placeholder='Direccion' className="crud input" value={client.direccionCliente} onChange={handleChange} name="direccionCliente" required />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <div> 
                    <Button type='submit' className="btnCRUD">Actualizar Cliente</Button>
                    </div>
                    <div>
                    <button className="btnBack"><Link to={'/clientes'} className='text-decoration-none text-white'>Volver a Clientes</Link></button>
                    </div>
                </Form>
            </div>
        </div>
    )
}


export default EditClient
