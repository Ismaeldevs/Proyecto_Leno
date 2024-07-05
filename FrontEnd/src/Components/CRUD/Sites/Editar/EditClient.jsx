import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTES, URL_CLIENTE_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


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
            <h2 className="p-5 text-white text-center">EDITAR CLIENTE</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Cliente">
                            <FormControl type='text' placeholder='Nombre Cliente' value={client.nombreCliente} onChange={handleChange} name="nombreCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Apellido del Cliente">
                            <FormControl type='text' placeholder='Apellido Cliente' value={client.apellidoCliente} onChange={handleChange} name="apellidoCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="DNI del Cliente">
                            <FormControl type='text' placeholder='DNI' value={client.dniCliente} onChange={handleChange} name="dniCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono del Cliente">
                            <FormControl type='text' placeholder='Telefono' value={client.telefonoCliente} onChange={handleChange} name="telefonoCliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion del Cliente">
                            <FormControl type='text' placeholder='Direccion' value={client.direccionCliente} onChange={handleChange} name="direccionCliente" />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <div> 
                    <Button type='submit' className='btn btn-danger mx-2'>Actualizar Cliente</Button>
                    <Link to={'/clientes'} className='btn text-white bg-danger '>Volver a Clientes</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}


export default EditClient
